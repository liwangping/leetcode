// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。

// var x = [1,2,1];
// var isPalindrome = function(x)
//  {
//         let head = 0;
//         let foot = array.length-1;
//         let temp = true;
//         for(let i = 0;head <= foot;i++){
//             if(array[head] === array[foot]){
//                 head++;
//                 foot--;
//             }else{
//                 temp = false;
//             }
//         } 
//         return temp;
// };
// console.log(isPalindrome(x));

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     var head = 0;
//     var foot = x.length-1;
//     var temp = true;
//     if(x<0){
//         temp = false;
//     }else{
//         for(var i = 0;head <= foot;i++){
//         if(x[head]===x[foot]){
//             head++;
//             foot--;
//         }else{
//             temp = false;
//         }
//     } 
//     }    
//     return temp;
// };

var isPalindrome = function(x) {
    if(x.toString() === x.toString().split('').reverse().join('')){
        return true;
    }else{
        return false;    
        }
    
};
//最为简单的一种方法。
