package factories;

import models.HitResult;

import javax.ejb.Local;

@Local
public interface HitResultCreationAbility {

    public HitResult createHitResult(String xValueString, String yValueString, String rValueString) throws CreatingException;
}
