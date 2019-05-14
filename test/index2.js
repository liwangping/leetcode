var s = "babad"

var longestPalindrome = function(s) {
        let head = s[0],
            foot = s.length - 1,
            sum = 0,
            word = [];
        for(var i = 0; i < s.length - 1; i++){
            if( head === foot){
                head ++; foot--;
                word[sum] = s[head];
                sum++;
            }else if{
                
            }
        }
};

console.log(longestPalindrome(s));