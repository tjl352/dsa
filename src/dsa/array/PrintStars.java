package dsa.array;
// Example output:
// Star pattern: 1
//*
//
//Star pattern: 2
//*
//**
//*
//
//Star pattern: 3
//*
//**
//***
//**
//*
//
//Star pattern: 4
//*
//**
//***
//****
//***
//**
//*
public class PrintStars {

    public static void main(String[] args) {
        //PrintStars.printStarPattern(4);
        PrintStars.printStarPattern2(4);
    }

    private static void printStarPattern(int num){
        //O(n^2) exponential time: 5th fastest
        for(int i = 0; i < num; i++){
            for(int j = 0; j <= i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i = num - 1; i > 0; i--){
            for(int j = 0; j < i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    private static void printStarPattern2(int num) {
        //O(n): linear time: 3rd fastest
        String s = "";
        for (int i = 0; i < num; i++) {
            s += "* ";
            System.out.println(s);
        }

        for (int i = num; i > 0; i--) {
            s = s.replaceFirst("\\* ", "");
            System.out.println(s);
        }
    }
}
