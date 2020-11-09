package servlets;

import factories.HitResultFactory;
import models.HitResult;
import models.storage.HitResultStorage;
import models.storage.Storagable;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class AreaCheckServlet extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String xValueString = req.getParameter("x-value");
        String yValueString = req.getParameter("y-value");
        String rValueString = req.getParameter("r-value");

        HitResultFactory hitResultFactory = new HitResultFactory();
        HitResult hitResult = null;
        try{
            hitResult = hitResultFactory.createHitResult(xValueString, yValueString, rValueString);
        }catch (Exception e){
//            req.setAttribute("Error-Message", e.getMessage()); //TODO
//            req.getRequestDispatcher("/error.jsp").forward(req, resp);
//            return;
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
//            req.setAttribute("Error-Message", e.getMessage()); //TODO
//            req.getRequestDispatcher("/error.jsp").forward(req, resp);
//            return;
        }

        httpSession.setAttribute("hitResultStorage", hitResultStorage);
        httpSession.setAttribute("results", hitResultStorage.toString());

        req.setAttribute("Hit-Result", hitResult); //Зачем?
        req.getRequestDispatcher("/result.jsp").forward(req, resp);
    }
}
