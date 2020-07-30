/* Basic 13 Algorithms                                                          
TEAM MEMBERS: George, Christian, Brock, Tyler, Joshua
1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  // code goes here
  // build a for loop start at 1 end at 256 increment by 1
  // print the value of i
  // invoke function print1to255()

  for (var i = 1; i < 256; i++) {
    console.log(i);
  }
}
print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
oupput: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  for (let i = 1; i <= 255; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}
printOdds1To255();

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(i + ' ' + sum);
  }
}
PrintIntsAndSum0To255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.

// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
let arr = [1, 4, 65, 34, 78];
function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArrayVals(arr);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
PrintMaxOfArray(arr);
PrintMaxOfArray([1, 2, 3, 4, 5, 6]);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  console.log(average);
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  let arr = [];
  for (let i = 1; i <= 255; i++) {
    if (i % 2) {
      arr.push(i);
    }
  }
  return arr;
}
ReturnOddsArray1To255();

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}
SquareArrayVals();
// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > y){
      count++;
    }
  }
  console.log(count);
}
returnArrayCountGreaterThanY();

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  for(let i=0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = arr[i] * -1;
    }
  }
  return arr;
}
ZeroOutArrayNegativeVals(arr1);
// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  let max = 0
  let min = 0
  let total = 0
  if ( i=0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
    } else if (arr[i] < min){
      min = arr[i]
    }
    total += arr[i]
  }
  let average = total / arr.length
  console.log(`max: ${max} min: ${min} average: ${average}`)
}
PrintMaxMinAverageArrayVals([1,4,3,2])

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr) {
  for(var i=0;i<arr.length;i++){
    if(i===arr.length-1){
      arr[i]=0;
    }else{
      arr[i]=arr[i+1];
    }
  }
  // console.log(arr);
}
arr1=[1,2,3,4,5];
//   [2,3,4,5,0]
ShiftArrayValsLeft(arr1);

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  for(let i =0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = ('dojo');
    }
  }
  return arr;
}
