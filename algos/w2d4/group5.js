// Group Members: Mark, Alberto, Tom, Quinton
// Big O Notation

/*
Time Complexity

[1,2,3,4,5,6,7,8,9,10]

arr[arr.length-1]

Linear - O(n)
Constant - O(1)
Exponential - O(n^2)

Space Complexity

*/

// Time O(n^2) | Space O(1)
function bubbleSort(arr) {
    var inOrder = true;
    do {
        inOrder = true;
        for (var i=1; i<arr.length;i++){
            if (arr[i]<arr[i-1]) {
                var temp=arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
                inOrder = false;
            }
        }
    } while (inOrder == false)

}

console.log(sort([4, 6, 3, 5, 7, 2, 8, 1]));
console.log(sort([4, 3, 6, 5, 7, 2, 8, 1]));
console.log(sort([4, 3, 5, 6, 7, 2, 8, 1]));
console.log(sort([1, 2, 3, 4, 5, 6, 7, 8]));





