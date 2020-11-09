package models.storage;

import models.HitResult;

import java.util.Iterator;
import java.util.LinkedList;

public class HitResultStorage implements Storagable{

    private final LinkedList<HitResult> hitResultList;

    public HitResultStorage(){
        hitResultList =  new LinkedList<HitResult>();
    }

    public void clearHitResults() {
        hitResultList.clear();
    }

    public void addHitResult(HitResult hitResult) {
        hitResultList.add(hitResult);
    }

    public LinkedList<HitResult> getHitResultList() {
        return hitResultList;
    }

    @Override
    public String toString() {
        String str = "";
        for (HitResult hitResult : hitResultList) {
            str += hitResult;
        }
        return str;
    }
}
