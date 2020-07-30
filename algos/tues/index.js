// // algos

// // declaring variables

// //static
// var bob = "Bob";    // string
// var a = 10;         // number/integer
// var hungry = true;  // boolean
// // dynamic
// var siblings = ['phillis', 'jim']; // array
// var bobsInfo = { // object
//     'name': 'bob'
// }
// var smart = null;// null


// // operators
// var a = 10;
// var b = 5;

// var c = a + b; // 15
// var c = a - 90; // -80
// var c = a * b; // 50
// var c = a / b; // 2
// var c = a % b; // 0
// var c = a < b; // false
// var c = a <= b; // false
// var c = a > b; // true
// var c = a >= b; // true
// var c = a === 10; // true
// var c = a == '10'; // true
// var c = a === '10'; // false
// a !== b

// // conditional structures

// if(isHungry === true){
//     // eat food
//     eatFood();
// }
// if(a === b && a === c || a === c && a === d){
//     console.log(true);
// } else if(a === c){
//     console.log("maybe");
// } else {
//     console.log(false);
// }

// // repetative structures
// i = i+1;
// i += 1;
// i++;
// //     1      2      4
// for(var i=1; i<=10; i++){
// //    3
//     console.log(i);
// }

// console.log 1, 2, 3, 8, 9, 10

// function declarations
// function addNum(){
//     var sum = 10 + 5;
//     console.log(sum);
// }            8  3
function addNum(a, b){
    var sum = a + b;
    return sum;
}

var a = 3;
var b = 8
//              11      +       3
var c = addNum(b, a) + addNum(1, 2);

console.log('This is c: '+c);



