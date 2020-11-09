package Cheker;


public class HitChecker implements HitCheckable{

    public boolean Check(Double X, Double Y, Double R) {
        if (X >= 0) {
            if (Y > 0) {
                return false; // X>=0 Y>0
            } else if (!(Y > 0)) {
                return (X * X + Y * Y <= (R * R) / 4); //X>=0 Y<=0
            }
            return false;
        } else if (!(X >= 0)) {
            if (Y > 0) {
                return (Y >= R * -1 && X <= R / 2); // X<0 Y>0
            } else if (!(Y > 0)) {
                return (Y + X <= -1 * R / 2); //X<0 Y<=0
            }
            return false;
        }
        return false;
    }
}
