// Mark, Christian, Savahn
// Reverse an array
// given an array return an array with the same values but in reverse order
// input: [1,2,3,4,5,6,7,8]
// output: [8,7,6,5,4,3,2,1]

function reverseArray(arr){
    let newarr = [];
    for(let i = arr.length-1; i > 0; i--){
        newarr.push(arr[i]);
    }
    return newarr;
}

function reverseArray2(arr){
    for(let i = 0; i < arr.length/2; i++){
        let tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8]));
console.log(reverseArray2([1,2,3,4,5,6,7,8]));