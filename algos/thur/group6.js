/* 
Predict the output:
TEAM MEMBERS: Tom, George, Jason

b = 2
temp = 4
arr[1] -> arr[0] = 2   : [4,2]
*/
function a(arr) {
    b = arr.length;

    var temp = arr[b - 1];
    arr[b - 1] = arr[0];  
    arr[0] = temp; 
    return arr;
  }
  
  console.log(a([1, 2, 3]));
  console.log(a([2, 4]));
  
  // output: 
  [3,2,1]
  [4,2]
  
  // 2
  function bar(arr){
    var x = arr.length;
    
    for( var i =0; i<x/2; i++){
      var temp = arr[x-1-i];
      arr[i] = arr[x-1-i];
      arr[x-1-i] = temp;
    }
    return arr
  }
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  
  // output: ?
  [3,2,3]
  [8,7,6,5,5,6,7,8]

  /*
  x = 8
  temp = arr[x-i-1] -> arr[8-1-1] ->arr[6] ->7
  arr[i] -> arr[1] = arr[x-i-1] -> 7

  [8,7,6,5,5,6,7,8]
  */