/*
TEAM MEMBERS: Joshua Ayers, Joshua Park, Adrian, Kishor
Use a T-Diagram to help you Predict the output of what will be printed to
the console.
*/

// 1
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
  }
  console.log(i);
  
  // output: 0,4,8, 12
  
  // 2
  var a = 20;
  // function abc(list) {
  //   a = 15;
  //   console.log(a);
  // }
  console.log(a);
  a = [
    [1, 2, 3],
    [5, 10, 20],
  ];
  
  // output: 20
  
  // 3//////
  function sum(list) {
    sum = list[0];
    for (var i = 0; i < list.length; i++) {
      sum = sum + list[i];
      console.log(sum);
    }
  }
  c = sum([1, 2, 3]);
  console.log(c);

  josh.a got 2,4,7,[1,2,3] 
  //kishor 2,4,7
  Josh p= 2,4, 7,[1,2,3]
  // output: *prediction goes here