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
function bubbleSort(arr) {
    for (var =0;i<arr.length
}

console.log(sort([4,6,3,5,7,2,8,1]))
console.log(sort([4,3,6,5,7,2,8,1]))
console.log(sort([4,3,5,6,7,2,8,1]))
console.log(sort([1,2,3,4,5,6,7,8]))

//Iterate over the array
    //Create temp variable to hold current element
    //If current variable is greater than next element, swap
//Print the array
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i + 1]; 
        if(arr[i] > arr[i + 1]){
            temp = arr[i];
        }
    }
    return arr;
}
console.log(bubbleSort([3, 2,1,5,7]))
//[ 3, 3, 3, 5, 7 ] ?!
    
