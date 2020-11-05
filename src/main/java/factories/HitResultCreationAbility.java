package factories;

import models.HitResult;

public interface HitResultCreationAbility {

    public HitResult createHitResult(String xValueString, String yValueString, String rValueString) throws CreatingExeption;
}
