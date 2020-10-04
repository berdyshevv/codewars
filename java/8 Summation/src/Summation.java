public class Summation {
    public static int summation(int n) {
        int acc = 0;
        while(n > 0){
            acc += n;
            n--;
        }
        return acc;
    }
    // Gauss method : first plus last mutiplied by n/2
//    public static int summation(int n) {
//        return  n*(n+1)/2;
//    }
}