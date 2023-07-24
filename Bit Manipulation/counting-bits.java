// My solution
public int[] countBits(int n) {
    int[] arr = new int[n+1];
    for(int i=0;i<=n;i++){
        int num = i;
        int res=0;
        while(num!=0){
            num = num & (num-1);
            res+=1;
        }
        arr[i] = res;
    }
    return arr;
}

// O(N) Solution

public int[] countBits(int n) {
    int[] arr = new int[n+1];
    Arrays.fill(arr, 0);
    int offset=1;
    for(int i=1;i<=n;i++){
        if(offset*2==i){
            offset=i;
        }
        arr[i] = 1 + arr[i-offset];
    }
    return arr;
}