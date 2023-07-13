/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number =0;
    let factor = 1;
    for(let i=digits.length-1;i>=0;i--){
        number+=digits[i]*factor;
        factor=factor*10;
    }
    number++;
    let output=[];
    while(number!=0){
        const lastDigit = number%10;
        output.unshift(lastDigit);
        number=Math.floor(number/10);
    }
    return output;
};