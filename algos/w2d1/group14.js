// Reverse an array
// given an array return an array with the same values but in reverse order
// input: [1,2,3,4,5,6,7,8]
// output: [8,7,6,5,4,3,2,1]

function reverseArray(arr){
    for(var i=0;i<arr.length/2;i++){
        var temp = arr[i];
        arr[i]= arr[arr.length -1];
        arr[arr.length-1] =temp;
        return arr;
    }
}
console.log(reverseArray([1,2,3,4,5,6,7,8]));

