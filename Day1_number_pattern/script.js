function generateNumberPyramid(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
       for (let j = 1; j <= rows-1; j++) {
          pattern +=' ';
       }
      for(let c=1;c<=2*rows-1;c++){
      pattern = c+' ';
      }
    pattern += '\n';
    }
    return pattern;
 }
 
 // Example usage:
 console.log(generateNumberPyramid(5));

 