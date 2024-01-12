//q1


// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//q2
// function isEmpty(obj) {
//     for (let key in obj) {
//       // if the loop has started, there is a property
//       return false;
//     }
//     return true;
//   }

  //q3
  
//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   alert(sum); // 390


//q4
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );