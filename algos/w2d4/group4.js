// Big O Notation
Names: George, Josh P, Joshua A
/*
Time Complexity

[1,2,3,4,5,6,7,8,9,10]

arr[arr.length-1]

Linear - O(n)
Constant - O(1)
Exponential - O(n^2)

Space Complexity

*/
function bubbleSort(arr){

}

console.log(sort([4,6,3,5,7,2,8,1]))
console.log(sort([4,3,6,5,7,2,8,1]))
console.log(sort([4,3,5,6,7,2,8,1]))
console.log(sort([1,2,3,4,5,6,7,8]))

var bubbleSort = [4,6,3,5,7,2,8,1];
bubbleSort.sort(function(a, b) {
  return a - b;
});

console.log(bubbleSort);
-------------------------------------------------------


function sort(arr){
    for (var i=0; i < arr.length; i++){
      temp=[i]
      temp1=[i+1]
      if (temp > temp1);
        arr.push(temp)
  }}
  
  console.log(sort([4,6,3,5,7,2,8,1]))


-----------------------------------------------------------

var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0; i < input.length ; i++){
  inserted = false;
  for (var j = 0; j < output.length ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

console.log(output);

---------------------------------------------------------
// copied
// function sort(arr) {
//     var length = arr.length;
//     //Number of passes
//     for (var i = 0; i < length; i++) { 
//         //Notice that j < (length - i)
//         for (var j = 0; j < (length - i - 1); j++) { 
//             //Compare the adjacent positions
//             if(arr[j] > arr[j+1]) {
//                 //Swap the numbers
//                 var tmp = arr[j];  //Temporary variable to hold the current number
//                 arr[j] = arr[j+1]; //Replace current number with adjacent number
//                 arr[j+1] = tmp; //Replace adjacent number with current number
//             }
           
//         } 
             
//     }
//      return arr  
// }
// console.log(sort([3,2,7,8,1]))