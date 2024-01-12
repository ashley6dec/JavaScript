//-------------------------------pattern 1

// let rows = 5;


// let pattern = "";

// // outer loop runs for rows
// for (let r = 1; r <= rows; r++) {
//    //  for the spaces
//    for (let s = 1; s <= rows - r; s++) {
//       pattern += " ";
//    }

//    // for the numbers
// //    for (let num = 1; num <= 2 * r - 1; num++) {
// //       pattern += num;
// //    }

// //    pattern += "\n";
// // }
// // console.log(pattern);

// //--------------------------------pattern 4
// let rows = 5; 
// let pattern = "";

// // External loop
// for (let i = 1; i <= rows; i++) {
//   // creating spaces
//   for (let j = 1; j < i; j++) {
//     pattern += " ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * (rows - i + 1) - 1; k++) {
//     pattern += k;
//   }
//   pattern += "\n";
// }
// console.log(pattern);


// //----------------------------pattern 2
// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // print 6-n stars
//    for (let num = n; num >=1; num--) {
//       pattern += num;
//    }
//    if(n<5)
//    pattern += "\n";
// }
// console.log(pattern);


// let pattern1 = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
   
//    for (let num = 5 - n; num >= 1; num--) {
//       pattern1 += num;
//    }
//    pattern1 += "\n";
// }
// console.log(pattern1);

// //-------------------------pattern random
// let rows = 5;
// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//    // print 6-n stars
//    for (let num = rows-n+1; num >=1; num--) {
//       pattern += num;
//    }
//    if(n<5)
//    pattern += "\n";
// }
// console.log(pattern);

// let pattern1 = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n < rows; n++) {
   
//    for (let num = n+1; num >=1; num--) {
//       pattern1 += num;
//    }
//    pattern1 += "\n";
// }
// console.log(pattern1);


//

// //----------------------------pattern 3
let rows = 5;
// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   // print 6-n stars
   for (let s = 1; s <= rows - n; s++) 
           pattern += " ";
   for (let num = 1; num <=n; num++) {
      pattern += num;
   }
   
   if(n<5)
   pattern += "\n";
}
console.log(pattern);

let pattern1 = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
    for (let s = 1; s <= n; s++) 
    pattern1 += " ";
   for (let num = 1; num <=5-n; num++) {
      pattern1 += num;
   }
   pattern1 += "\n";
}
console.log(pattern1);

