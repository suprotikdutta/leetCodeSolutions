//Simple solution

public int hammingWeight(int n) {
    int res=0;
    for(int i=0;i<32;i++){
        if(n%2!=0){
            res+=1;
        }
        n=n>>1;
    }
    return res;
}

//Optimized solution

public int hammingWeight(int n) {
    int res=0;
    while(n!=0){
        n=n&(n-1);
        res+=1;
    }
    return res;
}