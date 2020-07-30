// Reverse an array
// given an array return an array with the same values but in reverse order
// input: [1,2,3,4,5,6,7,8]
// output: [8,7,6,5,4,3,2,1]

// reverseArr with new array

function reverseArray(arr) {
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// reverseArr with old array

let testArr = [1, 2, 3, 4, 5, 6, 7];
function reverseArrayUsingOldArr(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    let start = arr[i];
    let end = arr[arr.length - 1 - i];
    console.log(`start: ${start} end: ${end}`);
    arr[i] = end;
    arr[arr.length - 1 - i] = start;
  }
  return arr;
}

console.log(reverseArrayUsingOldArr(testArr));
