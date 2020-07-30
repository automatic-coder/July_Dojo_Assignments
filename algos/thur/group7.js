/* 
Predict the output:
TEAM MEMBERS: , Brock, Adrian, Vilkram, Quinton.
*/
function a(arr) {
    b = arr.length;
    var temp = arr[b - 1];  //stores value of last position
    arr[b - 1] = arr[0];    //Last position is = First position
    arr[0] = temp;          //Replaces first position with original last position value
    return arr;
  }
  
  console.log(a([1, 2, 3])); becomes [3,2,1]
  console.log(a([2, 4])); [4,2]
  
  // output: ?
  // kishor-[3,2,1],[4,2]
  
  // 2
  function bar(arr){
    var x = arr.length;
    
    for( var i =0; i<x/2; i++){
      var temp = arr[x-i-1];   //stores value of last position - i
      arr[i] = arr[x-i-1];     //arr[i] = value of ^
      arr[x-i-1] = temp;       //I don't think this does anything
    }
    return arr
  }
  console.log(bar([1,2,3]))                   //[3,2,3]
  console.log(bar([1,2,3,4,5,6,7,8]))         //[8,7,6,5,5,6,7,8]
  
  // output: ?