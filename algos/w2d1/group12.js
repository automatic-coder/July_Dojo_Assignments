// Josh P, Joshua A, George, Kishor

// Reverse an array
// given an array return an array with the same values but in reverse order
// input: [1,2,3,4,5,6,7,8]
// output: [8,7,6,5,4,3,2,1]

function reverseArray(arr){
for(var i=0;i<arr.length/2;i++){
    var temp =arr[0];
    arr[0]=arr[arr.length]-1;
    arr[arr.length-1] =temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8]));


funtion reverseArray(arr){
    var newArray = [];
    for (var i = array.length - 1; i > 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}




function reverseArray(arr){
    for(var i=0; i<arr.length; i++)
}