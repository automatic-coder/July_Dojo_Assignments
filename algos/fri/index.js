/* Basic 13 Algorithms                                                          
TEAM MEMBERS: 
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
// print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
oupput: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  // code goes here
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  // create a sum variable initialize to zero
  // create for loop start at 0, end at 256, increment 1
  // inside for loop add i to sum
  // print i
  // print sum
  x = 0;
  for (var i = 0; i < 256; i++){
    x=i+x
  console.log(i+" "+x)
  }
}
PrintIntsAndSum0To255()
// 4. Iterate and Print Array
// Iterate through a given array, printing each value.

// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  // code goes here
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print itsii largest element.
function PrintMaxOfArray(arr) {
  // code goes here
}

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  // code goes here
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  // code goes here
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
  // code goes here
  // iterate through array
  // for loop start at 0 end at length of the array, increment by 1
  // inside for loop
      // multiply arr[i] by itself and set it as new value
  // return arr

  for(var i=0; i<arr.length; i++){
    arr[i] = arr[i]**2;
  }
  return arr;
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
  // iterate through arr
  // for loop start at 0, end at arr.length-1, increment by 1
  // inside for loop
    // assign current position of i the value at value at arr i+1
    // [2,3,4,5,6,7,7]
  // reassign the value at the last position to be zero
  for(var i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr[arr.length-1] = 0;
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
}
