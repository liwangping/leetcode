nums = [2,7,9,11];
target = 9;
var twoSum = function(nums, target) {
  var arr=[];
  for(var i = 0;i < nums.length; i++){
      for(var j = i + 1;j <nums.length; j++){
          if(nums[i]+nums[j]==target){
              arr.push(i);
              arr.push(j);
              return arr;
          }
      }
  }
};
//暴力解

nums = [2,7,9,11];
target = 9;
var twoSum = function(nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
      var tmp = target - nums[i];
      if (a[tmp] !== undefined) 
      {
        return [a[tmp], i];
      }  
      a[nums[i]] = i;
    }
  };
/*这个函数中我们可以看到有两个数组一个是nums = [2,7,9,11] 一个数组是待存入的数组a[] 
作用是将总和减去其中一个数后，设差为tmp，后将其差和原数组下标存入a[tmp(差)]，而a[tmp(差)]
的值为原数组下标。步骤如下，将总和9减去第一个值2,差为7，而a[7]是未定义的，将原数组下标0存入
a[2].所以a[2]=0.而在下一步时，9-7=2；而a[2]是存在的，所以将现在的数组下标和原来的数组下标
作为返回。这个巧妙的借助另一个数组下标将之前的差进行存储。然后将其存储降低了复杂度*/
/* 扩展 如果是三个数的话，需要将其扩充为三个数组*/ 