
// var addTwoNumbers = function(l1, l2) {
//     var rs = new ListNode(0);
//     var temp = rs;
//     var carry = 0;
//     while(l1||l2){
//         var x = l1?l1:0;
//         var y = l2?l2:0;
//         var sum = x + y + carry;
//         carry = parseInt(sum / 10);
//         temp.next = new ListNode(sum % 10);
//         temp = temp.next;
//         if(l1)
//             l1 = l1.next;
//         if(l2)
//             l2 = l2.next;
//     }
//     if(carry >0)
//         temp.next = new ListNode(1)
//     return rs.next;
// };

var addTwoNumbers = function (l1, l2) {
    let empty = { val: 0, next: null },
        add = (p1, p2, ex) => {  

            if (!p1 && !p2 && !ex){
            return null; }

            p1 = p1 || empty;
            p2 = p2 || empty;
            x = p1.val + p2.val + ex;
            ex = 0;
            if (x > 9) {
                ex = 1;
                x = x % 10;
            }
          return { val: x, next: add(p1.next, p2.next, ex) }
        }
    return add(l1, l2, 0);
};
//采用递归算法，沿着链向后运算，每次调用add函数时,将两个链的指针传递下去，并把ex作为十位进制
//的进位，将add作为一个返回值。