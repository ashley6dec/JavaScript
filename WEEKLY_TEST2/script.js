const date_input = document.querySelector("#root > input");
const button = document.querySelector("#root > button");

const result = document.getElementsByClassName("output");

button.addEventListener("click",(e)=>{
    const bday= new Date(date_input.value);
    const currDate = new Date();

    // const diffInMill = bday.getTime() - currDate.getTime();

    // const millInYear = 365 * 12 * 30 * 24 * 60 * 60 * 1000;

    // const age = Math.floor(diffInMill/millInYear);
    const month = currDate.getMonth()-bday.getMonth();

    if(month<0||month===0 && currDate<bday)
    age--;
  
    console.log(age);
   document.getElementById("result").innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    
});








// var body = null;

// if (typeof document !== 'undefined') {
//     // will run in client's browser only
//     body = document.getElementsByTagName("body")[0];
// }
// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");

// function calculateAge() {
//   const birthdayValue = birthdayEl.value;
//   if (birthdayValue === "") {
//     alert("Please enter your birthday");
//   } else {
//     const age = getAge(birthdayValue);
//     resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//   }
// }

// function getAge(birthdayValue) {
//   const currentDate = new Date();
//   const birthdayDate = new Date(birthdayValue);
//   let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//   const month = currentDate.getMonth() - birthdayDate.getMonth();

//   if (
//     month < 0 ||
//     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// }

// btnEl.addEventListener("click", calculateAge);

// var body = null;

// if (typeof document !== 'undefined') {
//     // will run in client's browser only
//     body = document.getElementsByTagName("body")[0];
// }

// if (typeof window !== 'undefined') {
//   // 👉️ can use document here
//   console.log('You are on the browser')

//   console.log(document.title)
//   console.log(document.getElementsByClassName('my-class'));
// } else {
//   // 👉️ can't use document here
//   console.log('You are on the server')
// }