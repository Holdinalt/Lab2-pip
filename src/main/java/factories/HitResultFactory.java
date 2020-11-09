package factories;

import Cheker.HitCheckable;
import Cheker.HitChecker;
import models.HitResult;
import validation.UnvalidExeption;
import validation.Validatable;
import validation.Validator;

public class HitResultFactory implements HitResultCreationAbility{

    private final Validatable validator;
    private final HitCheckable hitChecker;

    public HitResultFactory() {
        this.validator = new Validator();
        this.hitChecker = new HitChecker();
    }

    public HitResult createHitResult(String xValueString, String yValueString, String rValueString) throws CreatingException {

        Double xValue = Double.parseDouble(xValueString);
        Double yValue = Double.parseDouble(yValueString);
        Double rValue = Double.parseDouble(rValueString);

        try {
            validator.checkValues(xValue, yValue, rValue);
        } catch (UnvalidExeption e) {
            throw new CreatingException(e.getMessage());
        }

        boolean result = hitChecker.Check(xValue, yValue, rValue);

        return new HitResult(xValue, yValue, rValue, result);
    }

}
