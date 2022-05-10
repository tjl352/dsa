package dsa.array;
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/

public class MaxProfit {
    public static void main(String[] args) {
        int[] prices = {3,4,5,6,2,7};

        System.out.println(MaxProfit.maxProfit1(prices));

    }

    private static int maxProfit1(int[] prices){
        int maxProfit = 0;
        for(int i = 0; i < prices.length - 1; i++){
            for(int j = i + 1; j < prices.length; j++){
                int profit = prices[j] - prices[i];
                if(profit > maxProfit){
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;
    }

    private static int maxProfit2(int[] prices){
        int maxprofit = 0;
        return maxprofit;
    }
}
