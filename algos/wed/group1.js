/*
TEAM MEMBERS: Tom, Alexander, Sean
Use a T-Diagram to help you Predict the output of what will be printed to
the console.
*/

// 1
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}
console.log(i);
// output: 0,4,8
//
// 2
var a = 20;
function abc(list) {
  a = 15;
  console.log(a);
}
console.log(a);
a = [
  [1, 2, 3],
  [5, 10, 20],
];
// output: 20

// 3
function sum(list) {
  sum = list[0]; //1 -> 2 -> 4 -> 7
                
  for (var i = 1; i < list.length; i++) {

    sum = sum + list[i]; 

    console.log(sum);

  }
}
c = sum([1, 2, 3]);
console.log(c);

// output: 2, 4, 7
