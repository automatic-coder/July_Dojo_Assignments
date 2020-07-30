// Move zeros

// members: alexander, joshua, jaime, armen

// given an array of integers move all zeros to the end of the array
// while keeping the integrity of the order of the non-zeros and return the array

// input: [2,5,0,3,0,7,8,0,9]
// output: [2,5,3,7,8,9,0,0,0]

function moveZeros(arr){
    

}

console.log(moveZeros([2,5,0,3,0,7,8,0,9]))





//Example 1: Doesn't Work
function moveZeros(arr){
    var notZero = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i] != 0){
        notZero.push(arr[i]);
      }
    }
    return arr;
}
console.log(moveZeros([2,5,0,3,0,7,8,0,9]))

//Example 2: Doesn't Work
//moveZeros function()
    //Takes in array of numbers
    //Create empty zeroArray to hold numbers that equal zero
    //Create a for loop to iterate over original array
        //If current element is equal to zero, push that element to zeroArray
    //Create a for loop to iterate over zeroArray and push elements to end the original array
    //Return original array
function moveZeros(arr){
    var zeroArray = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i] == 0){
        zeroArray.push(arr[i]);
      }
      for(var j = 0; j < zeroArray.length; j++){
        arr.push(zeroArray[j]);
      }
    }
    return arr;
}
console.log(moveZeros([2,5,0,3,0,7,8,0,9]))


function moveZeros(arr){
  var nums =[]
  var zeros = []
  var result =[]
  var n = arr.length
  for(var i=0; i<n; i++){
    if(arr[i]!==0){
      nums.push(arr[i])
      }else{
        zeros.push(arr[i])
      }
   }
result = nums.concat(zeros);
return final
}
          
console.log (moveZeros([1,0,3,0,5,0]))



