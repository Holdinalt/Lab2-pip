package models.storage;

import models.HitResult;

import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

public interface Storagable extends Serializable {

    void clearHitResults();

    void addHitResult(HitResult hitResult);

    List<HitResult> getHitResultList();
}
