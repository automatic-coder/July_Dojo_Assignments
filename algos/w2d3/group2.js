// Move zeros

// members: Christian, Mark, Paul, Jonathan

// given an array of integers move all zeros to the end of the array
// while keeping the integrity of the order of the non-zeros and return the array

// input: [2,5,0,3,0,7,8,0,9]
// output: [2,5,3,7,8,9,0,0,0]

function moveZeros(arr){
    
}

console.log(moveZeros([2, 5, 0, 3, 0, 7, 8, 0, 9]))


// 



function moveZeros(arr){
    var count = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 0)
            count++;
        else{
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < count; i++){
        newArr.push(0);
    }
    return newArr;
}
console.log(moveZeros([2, 5, 0, 3, 0, 7, 8, 0, 9]))




function moveZeros2(arr){
    var newArr = [];
    var zeros = [];
    
    for(var i =0; i < arr.length; i++){
        if(arr[i] === 9){
            zeros.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }
    return [...newArr,...zeros];
}
console.log(moveZeros2([2, 5, 0, 3, 0, 7, 8, 0, 9]))

function moveZeros3(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] === 0){
            arr.push(arr.splice(i, 1)[0]);
        }
    }
    return arr;
}
/*
[2, 5, 3, 7, 0, 8, 9 0, 0]
*/


