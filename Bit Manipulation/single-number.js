var singleNumber = function(nums) {
    let ans=0;
    for(let num of nums){
        ans=ans^num;
    }
    return ans;
};