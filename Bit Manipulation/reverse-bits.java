//Optimized solution
int res =0;
for(int i=0;i<32;i++){
     res=res<<1;
    if((n&1)==1){
         res = res+1;
     }
     n=n>>1;
    }
return res;