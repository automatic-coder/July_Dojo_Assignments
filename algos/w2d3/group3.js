// Move zeros

// members: Daniel, Tyler, Laborian, Vikram

// given an array of integers move all zeros to the end of the array
// while keeping the integrity of the order of the non-zeros and return the array

// input: [2,5,0,3,0,7,8,0,9]
// output: [2,5,3,7,8,9,0,0,0]


// this doesn't work...lot and lot of 0's...don't run it...lol
// also tell vinson that i need back into the group
//almost

var array1 = [2,5,0,3,0,7,8,0,9]
// with a new arr
function moveZeros(arr){
    var newArr = [];
    var countZero = 0;
    for (i=0; i<arr.length; i++){
        if(arr[i] !== 0) {
            newArr.push(arr[i])
        } else {
          countZero++
        }
    }
    for (i=0; i<countZero; i++){
        newArr.push(0)
    }
    return newArr;
}

console.log(moveZeros(array1));

// function moveZeros2(arr){

// }
// console.log(moveZeros2(arry1))