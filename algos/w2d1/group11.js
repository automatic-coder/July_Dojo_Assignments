// Reverse an array
// given an array return an array with the same values but in reverse order
// input: [1,2,3,4,5,6,7,8]
// output: [8,7,6,5,4,3,2,1]
// Members: Alex, Daniel, Quinton, Tom

function reverseArray(arr){

}
console.log(reverseArray([1,2,3,4,5,6,7,8]));

// Way 1: 
function reverseArray(arr){
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--){
      newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseArray([1,2,3,4,5,6,7,8]));

//Way 2:
function reverseArray(arr){
  for (var i=0; i< arr.length/2; i++){ 
  var x= arr[i];
    arr[i]= arr[arr.length-1-i];
    arr[arr.length-1-i]=x;
  }
  return arr;
}
//                        0,1,2,3,4,5,6,7
console.log(reverseArray([1,2,3,4,5,6,7,8]))