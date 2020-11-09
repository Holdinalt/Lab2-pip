package servlets;

import validation.UnvalidExeption;
import validation.Validatable;
import validation.Validator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@WebServlet("/server")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            String xValueString = req.getParameter("selectX");
            String yValueString = req.getParameter("formTextY");
            String rValueString = req.getParameter("selectR");
            Double xValue = Double.parseDouble(xValueString);
            Double yValue = Double.parseDouble(yValueString);
            Double rValue = Double.parseDouble(rValueString);
            Validatable validator = new Validator();
            validator.checkValues(xValue, yValue, rValue);
        } catch (Exception e) {
            String xValueString = req.getParameter("selectX");
            String yValueString = req.getParameter("formTextY");
            String rValueString = req.getParameter("selectR");
            req.setAttribute("Error-Message", "Bad values " + xValueString + " " + yValueString + " " + rValueString);
            req.getRequestDispatcher("/error.jsp").forward(req, resp);
        }

        req.getRequestDispatcher("/area-check").forward(req, resp);
    }
}
