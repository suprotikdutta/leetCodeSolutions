class Solution {
    public boolean isHappy(int n) {
        while(true){
            if(n/10==0){
                if(n==1){
                    return true;
                }
                return false;
            }
            n = this.calculate(n);
        }
    }
    public int calculate(int n){
        int sum=0;
        while(n!=0){
            int lastDigit = n%10;
            int sq = lastDigit*lastDigit;
            sum+=sq;
            n=n/10;
        }
        return sum;
    }
}

//Optimized

class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<>();
        while(!set.contains(n)){
            set.add(n);
            n=this.calculate(n);
            if(n==1){
                return true;
            }
        }
        return false;
    }

    public int calculate(int n){
        int sum=0;
        while(n!=0){
            int lastDigit = n%10;
            int sq = lastDigit*lastDigit;
            sum+=sq;
            n=n/10;
        }
        return sum;
    }
}