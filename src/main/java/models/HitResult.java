package models;

public class HitResult {
    private final Double xValue;
    private final Double yValue;
    private final Double rValue;
    private final Boolean hitted;

    public HitResult(Double xValue, Double yValue, Double rValue, Boolean result) {
        this.xValue = xValue;
        this.yValue = yValue;
        this.rValue = rValue;
        this.hitted = result;
    }

    public Double getX() {
        return xValue;
    }

    public Double getY() {
        return yValue;
    }

    public Double getR() {
        return rValue;
    }

    public Boolean isHitted() {
        return hitted;
    }

    @Override
    public String toString() {
        return "HitResult{"
                + "xValue="
                + xValue
                + ", yValue="
                + yValue
                + ", rValue="
                + rValue
                + ", result="
                + hitted
                + '}';
    }
}
