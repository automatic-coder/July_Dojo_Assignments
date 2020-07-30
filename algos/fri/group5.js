/* Basic 13 Algorithms                                                          
TEAM MEMBERS:  Daniel, Mark, Alex, Quinton
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
  // code goes here
  //object is to log all odd integers from 1 to 255
  //create loop to encompass
  //print odd values of i
  //invoke function PrintOdds1To255()
  for (i = 0; i < 256; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  //build a for loop
  //if i is less than 256 increment by + 1
  //
  for (vari = 0; i < 256; i++) {
    var x = 0;
    x = x + i;
    console.log(i + ' ' + x);
  }
}


// 4. Iterate and Print Array
// Iterate through a given array, printing each value.

  //create a function that accepts arrays
    //create a for loop, set i to 0, for everytime i is less than array length, add one
      //iterate through array and print current element
//               0,1,2, 3, 4 , 5  arr[0]
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
// Input array: [1,4,65,34,78]
// make loop for arr length
//write if statement to find max of the arr
//return the max vaule of arr
function PrintMaxOfArray(arr) {
  // code goes here
  function findMax(arr) {
    var max=arr[0];
    for (var i = 0;i<arr.length;i++) {
      if(arr[i]>max) {
        max=arr[i]
      }
    }
    return max; 
}

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  // create sum variable and assign value of 0
  var sum = 0;
  // create for loop with i starting at 0, as long as i less than array length, incremement by 1
  for(var i = 0; i < arr.length; i++){
    //iterate through array
    sum+=arr[i];
      //add each element to sum variable
  }
  //return sum divided by array length
  return sum / arr.length;
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  // code goes here
}
if %2==1 or %1==0

if ( num % 2 == 1) //odd #
if (num % 2 == 0) //even #

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
  // code goes here
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
function ShiftArrayValsLeft(arr) {
  // code goes here
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
}
