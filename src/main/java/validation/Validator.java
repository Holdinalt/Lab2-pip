package validation;

import javax.ejb.Singleton;
import javax.ejb.Stateless;
import java.util.Arrays;
import java.util.List;


public class Validator implements Validatable{

    private static final List<Double> xValues =
            Arrays.asList(-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0);

    private static final List<Double> RValues =
            Arrays.asList(1.0, 2.0, 3.0, 4.0, 5.0);

    public void checkValues(Double xValue, Double yValue, Double rValue) throws UnvalidExeption {
        checkXValue(xValue);
        checkYValue(yValue);
        checkRValue(rValue);
    }

    private void checkXValue(Double xValue) throws UnvalidExeption {
        if (xValue == null) {
            throw new UnvalidExeption("Не верный X");
        }

        if (!xValues.contains(xValue)) {
            throw new UnvalidExeption("Не верный X");
        }
    }

    private void checkYValue(Double yValue) throws UnvalidExeption {
        if (yValue == null) {
            throw new UnvalidExeption("Не верный Y");
        }

        if (yValue <= -3 || yValue >= 5) {
            throw new UnvalidExeption("Не верный Y");
        }
    }

    private void checkRValue(Double rValue) throws UnvalidExeption {
        if (rValue == null) {
            throw new UnvalidExeption("Не верный R");
        }

        if (!RValues.contains(rValue)) {
            throw new UnvalidExeption("Не верный R");
        }
    }
}
