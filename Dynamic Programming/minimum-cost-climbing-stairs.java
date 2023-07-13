class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int length = cost.length;
        if(length==0) return 0;
        if(length==1) return cost[0];
        int one = cost[length-1];
        int two = cost[length-2];
        for(int i=length-3;i>=0;i--){
            int temp = two;
            if(cost[i]+one>cost[i]+two){
                two = cost[i]+two;
            }else{
                two = cost[i]+one;
            }
            one=temp;
        }
        return one<two?one:two;
    }
}