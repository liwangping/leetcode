var reverse = function(x) {
    var isNeg = x < 0 
    if (isNeg) {
      x *= -1
    }
    var res = +x.toString().split('').reverse().join('')//数组反转 
// split函数是将一个字符串分割成字符串数组。join函数是将数组中的所有元素放入字符串中。
//reverse()为反转
    if (res > 2**31) {
      return 0
    }  
    if (isNeg) {
      res *= -1
    }
    return res
  };