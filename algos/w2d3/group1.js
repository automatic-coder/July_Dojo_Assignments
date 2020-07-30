// Move zeros, Tom, Alberto, Brock. Nathan


// given an array of integers move all zeros to the end of the array
// while keeping the integrity of the order of the non-zeros and return the array

// input: [2,5,0,3,0,7,8,0,9]
/*
1) [2,5,3,0,7,0,8,9,0]
2) [2,5,3,7,0,8,0,9,0]
3) [2.5.3.7.8.0.0.9.0]
4) [2,5,3,7,8,0,9,0,0]
*/
// output: [2,5,3,7,8,9,0,0,0]

function moveZeros(arr){
    var nonZeroFoundAfterZero = false;
    do {
        nonZeroFoundAfterZero = false;
        for(var i=1; i < arr.length; ++i) {
            if (arr[i-1] == 0 && arr[i] != 0) {
                // Swap the numbers
                nonZeroFoundAfterZero = true;
                arr[i-1] = arr[i];
                arr[i] = 0;
            }
        }
    } while (nonZeroFoundAfterZero);
    return arr;
}


        

console.log(moveZeros([2,5,0,3,0,7,8,0,9]))