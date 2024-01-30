

// function saveLocalStorage(){
//     const firstName= document.getElementById("firstName").value
// const lastName= document.getElementById("lastName").value
// const country= document.getElementById("country").value
// const phone= document.getElementById("phone").value
// const state= document.getElementById("state").value
// const city= document.getElementById("city").value

//    if(firstName==""){
//    window.alert("Please enter your name")
// firstNamestName.focus();
// return false;}

// if(lastName==""){
//    window.alert("Please enter your name")
// lastName.focus();
// return false;}

// if(country==""){
//    window.alert("Please enter your country")
// country.focus();
// return false;}

// if(phone==""){
//    window.alert("Please enter your phone number")
// phone.focus();
// return false;}

// if(state==""){
//    window.alert("Please enter your state")
// state.focus();
// return false;}

// if(city==""){
//    window.alert("Please enter your city")
// city.focus();
// return false;}

// if(register()){
//     window.alert("Information saved successfully in local storage")
//     return true;
// }
// else 
// return false;

// }

// let user=[];
// function register(){
//     const firstName= document.getElementById("firstName").value
// const lastName= document.getElementById("lastName").value
// const country= document.getElementById("country").value
// const phone= document.getElementById("phone").value
// const state= document.getElementById("state").value
// const city= document.getElementById("city").value


//    var newUser = {
//     id:Number(new Date),
//     "FirstName" :firstName,
//     "LastName" :lastName,
//     "Country" :country,
//     "PhoneNumber" : phone,
//     "State" :state,
//     "City" : city
//    }

//    user.push(newUser)
//    var userString = JSON.stringify(user);
//    localStorage.setItem('user',userString)


//    document.getElementById("firstName").value=user.FirstName
//  document.getElementById("lastName").value = user.LastName
// document.getElementById("country").value= user.Country
// document.getElementById("phone").value = user.PhoneNumber
// document.getElementById("state").value = user.State
// document.getElementById("city").value = user.City
// }

// Check if user information is already stored in local storage
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
  
}else{
    storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
   
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
  
}

// Call the function to store user information
storeUserInfo();
