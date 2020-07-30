// Big O Notation
//names: Daniel,Kishor, Vikram
/*
Time Complexity

[1,2,3,4,5,6,7,8,9,10]

arr[arr.length-1]

Linear - O(n)
Constant - O(1)
Exponential - O(n^2)

Space Complexity

*/
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,6,3,5,7,2,8,1]))
console.log(sorty([4,3,6,5,7,2,8,1]))
console.log(sort([4,3,5,6,7,2,8,1]))
console.log(sort([1,2,3,4,5,6,7,8]))


// for(var i=0;i<arr.length;i++){}
// for(var k=0;k<arr.length-1;k++)
//     if(arr[k]>arr[k+1]){
//         var temp=0;
//         temp=i[k]
//     i[k]=i[k=1]
//     j[k+1] = temp
        
//     }
// }
