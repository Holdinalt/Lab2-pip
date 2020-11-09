package servlets;

import factories.HitResultFactory;
import models.HitResult;
import models.storage.HitResultStorage;
import models.storage.Storagable;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/area-check")
public class AreaCheckServlet extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String xValueString = req.getParameter("selectX");
        String yValueString = req.getParameter("formTextY");
        String rValueString = req.getParameter("selectR");

        HitResultFactory hitResultFactory = new HitResultFactory();
        HitResult hitResult = null;
        try{
            hitResult = hitResultFactory.createHitResult(xValueString, yValueString, rValueString);
        }catch (Exception e){
            req.setAttribute("Error-Message", e.getMessage());
            req.getRequestDispatcher("/error.jsp").forward(req, resp);
            return;
        }

        HttpSession httpSession = req.getSession();
        Storagable hitResultStorage =
                (Storagable) httpSession.getAttribute("hitResultStorage");

        if (hitResultStorage == null) {
            hitResultStorage = new HitResultStorage();
        }

        try {
            hitResultStorage.addHitResult(hitResult);
        } catch (Exception e) {
            req.setAttribute("Error-Message", e.getMessage());
            req.getRequestDispatcher("/error.jsp").forward(req, resp);
            return;
        }

        httpSession.setAttribute("hitResultStorage", hitResultStorage);

        req.setAttribute("Hit-Result", hitResult);
        req.getRequestDispatcher("/answer.jsp").forward(req, resp);
    }
}
