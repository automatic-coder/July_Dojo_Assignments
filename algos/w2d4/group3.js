// Big O Notation
//members: Paul; Scott, Tyler, Christian, Savahn
/*
Time Complexity

[1,2,3,4,5,6,7,8,9,10]

arr[arr.length-1]

Linear - O(n)
Constant - O(1)
Exponential - O(n^2)

Space Complexity


pseudo:
start with first 2 elements compare to check which is bigger
if already sorted continue else swap
then compare the next 2 elements
*/

function sort(arr) {///works now
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i+1]) {
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
      }
    }
  }
  return arr;
}

console.log(sort([4, 6, 3, 5, 7, 2, 8, 1]));
console.log(sort([4, 3, 6, 5, 7, 2, 8, 1]));
console.log(sort([4, 3, 5, 6, 7, 2, 8, 1]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8]));

/*
// output: 

[4, 6, 3, 5, 7, 2, 8, 1]
[4, 6, 3, 8, 7, 2, 5, 1]
[4, 6, 3, 8, 7, 2, 5, undefined, 1]
[4, 6, undefined, 8, 7, 2, 5, 3, 1]
[4, 6, undefined, 8, 7, 2, 5, 1, 3]
[4, 6, 1, 8, 7, 2, 5, undefined, 3]
[4, 5, 1, 8, 7, 2, 6, undefined, 3]
[4, 5, 1, 8, 7, 2, 6, 3, undefined]
[4, 2, 1, 8, 7, 5, 6, 3, undefined]

*/
