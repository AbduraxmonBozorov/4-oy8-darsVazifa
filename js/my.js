// 1-masala
// function arrSum(arg){
//     let sum=0;
//     for(let i=0; i<arg.length; i++){
//         sum+=arg[i];
//     }
//     return sum;
// }
// console.log(arrSum([1, 2, 3, 4, 5]));

// 2-masala
// function arrMax(arg){
//     let max=0;
//     for(let i=0; i<arg.length; i++){
//         if(arg[i]>=max){
//             max=arg[i];
//         }
//     }
//     return max;
// }
// console.log(arrMax([1, 2, 3, 2,  5]));

// 3-masala
// function arrMin(arg) {
//   let min = arg[0];
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] <= min) {
//       min = arg[i];
//     }
//   }
//   return min;
// }
// console.log(arrMin([1, 2, 10, 3, -4, 2, 5]));

// 4-masala
// function arrMusbat(arg){
//     for(let i=0; i<arg.length; i++){
//         if(arg[i]<0){
//             arg[i]=arg[i]*(-1);
//         }
//     }
//     return arg;
// }

// console.log(arrMusbat([1, -2, 5,  -6]));

// 5-masala
// function  arr2x(arg){
//     for(let i=0; i<arg.length; i++){
//         arg[i]=arg[i]*2;
//     }
//     return arg;
// }
// console.log(arr2x([5, 8, 3 ,7, 6]));

// 6-masala
// function arrDeleteJuft(arg){
//     let newArr=new Array();
//     for(let i=0; i<arg.length; i++){
//         if(arg[i]%2==1){
//             newArr.push(arg[i]);
//         }
//     }

//     return newArr;
// }
// console.log(arrDeleteJuft([1, 6, 7, 3, 8]));

// 7-masala
// function arrDeleteJuft(arg){
//     let newArr=new Array();
//     for(let i=0; i<arg.length; i++){
//         if(arg[i]%2==0){
//             newArr.push(arg[i]);
//         }
//     }

//     return newArr;
// }
// console.log(arrDeleteJuft([1, 6, 7, 3, 8]));

// 8-masala
// function arrIsExistItem(mas = [], item) {
//     let isExisitItem=null;
//   for (let i = 0; i < mas.length; i++) {
//     if (mas[i] == item) {
//       isExisitItem=`${item} is exist`;
//     }
//   }
//   return isExisitItem;
// }
//,  console.log(arrIsExistItem([2, 3, true, 'salom'], true));

// 9-masala
// function arrReverse(arg){
//     let newArr=new Array();
//     for(let i=arg.length-1; i>=0; i--){
//         newArr.push(arg[i]);
//     }

//     return newArr;
// }
// console.log(arrReverse([1,2,3,4,5]));

// 10-masala
// function arrSum(mas = [], item) {
//   let a=0;
//   for(let i=0; i<mas.length; i++){
//     if(mas[i]>item){
//         a+=mas[i];
//     }
//   }
//   return a;
// }
// console.log(arrSum([1, 5, 9, 8, 2, 7, 4], 5));

// 11-masala
// function arrItemIncrement(arg){
//     let newArr=[];
//     for(let i=0; i<arg.length; i++){
//         newArr.push(arg[i]+1);
//     }
//     return newArr;
// }
// console.log(arrItemIncrement([1, 2, 3]));

// 12-masala
// function arrFindItemIndex(mas = [], item) {
//   let ind = 0;
//   for (let i = 0; i < mas.length; i++) {
//     if (mas[i] == item) {
//       ind = i+1;
//       break;
//     } else {
//       ind = `${item} in not defined in array`;
//     }
//   }
//   return ind;
// }
// console.log(arrFindItemIndex([1, 2, 3, 4, 5], 5));
