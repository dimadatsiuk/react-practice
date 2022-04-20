const numbers = [1,2,3];
[num1,num2] = numbers; //pulling first two elems from array
[num1,,num3] = numbers; //pulling first two elems from array
console.log(num1,num2);