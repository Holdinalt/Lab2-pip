package factories;

import Cheker.HitCheckable;
import Cheker.HitChecker;
import models.HitResult;
import validator.UnvalidExeption;
import validator.Validator;

import javax.ejb.EJB;

public class HitResultFactory implements HitResultCreationAbility{

    @EJB private Validator validator;
    @EJB private HitChecker hitChecker;

    public HitResult createHitResult(String xValueString, String yValueString, String rValueString) throws CreatingExeption {

        Double xValue = Double.parseDouble(xValueString);
        Double yValue = Double.parseDouble(yValueString);
        Double rValue = Double.parseDouble(rValueString);

        try {
            validator.checkValues(xValue, yValue, rValue);
        } catch (UnvalidExeption e) {
            throw new CreatingExeption(e.getMessage());
        }
        
        boolean result = hitChecker.Check(xValue, yValue, rValue);

        return new HitResult(xValue, yValue, rValue, result);
    }

}
