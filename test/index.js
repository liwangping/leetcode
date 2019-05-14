nums1 = [1, 2]
nums2 = [3, 4]

var findMedianSortedArrays = function(nums1, nums2) {
    var newnum = nums1.concat(nums2).sort((a, b) => {     return a - b;    });
    if( newnum.length % 2){
        mid = newnum[Math.floor(newnum.length / 2)];
    }else {
        mid = (newnum[Math.floor(newnum.length / 2) - 1] + newnum[Math.floor(newnum.length / 2)]) / 2 ;
    }
    return mid;
};
console.log(findMedianSortedArrays(nums1, nums2));
// console.log(Math.floor(4.5));