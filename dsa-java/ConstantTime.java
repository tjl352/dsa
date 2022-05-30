public class ConstantTime{
    public static void main(String[] args){
        System.out.println("this line runs in constant time O(1)");

        for(int i = 0; i < 1; i++){
            System.out.println("this line runs in constant time O(1)");
        }

        int x = 5;
        while(x == 5){
            System.out.println("this line runs in constant time O(1)");
            x++;
        }

        int y = 7;
        do{
            System.out.println("this line runs in constant time O(1)");
            y++;
        }
        while(y == 7);
    }
}