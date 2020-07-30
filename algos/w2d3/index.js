// Move zeros

// members: 

// given an array of integers move all zeros to the end of the array
// while keeping the integrity of the order of the non-zeros and return the array

// input: [2,5,0,3,0,7,8,0,9]
// output: [2,5,3,7,8,9,0,0,0]

function moveZeros(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] === 0){
            count++;
        } else {
            var temp = arr[i];
            arr[i] = arr[i - count];
            arr[i - count] = temp;
        }
    }
    return arr;
}

console.log(moveZeros([2,5,0,3,0,7,8,0,9]))