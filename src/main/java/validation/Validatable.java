package validation;

import javax.ejb.Local;


public interface Validatable {
    void checkValues(Double xValue, Double yValue, Double rValue) throws UnvalidExeption;
}
