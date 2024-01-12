console.log("hello");
let colorCOntainer = document.getElementById("colorContainer")
//to create div in javascript
for(let i = 0;i<30;i++){
    let colorContainer = document.createElement("div");
    colorContainer.classList.add(".color-container");// to link styling directly to javascript
   colorCOntainer.appendChild(colorContainer);  //LINKING HTML WITH JAVASCRIPT
}
let allDivs = document.querySelectorAll("colorContainer");
  allDivs.forEach((div)=>{
    let newColor = randomColor();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;
})

function randomColor(){
    let colorStr = "#"
    let str="0123456789abcdef";
    for(let i =0; i<6; i++ ){
         // it will take value from 0 to 15 
    let randomIdx = Math.floor(Math.random()*str.length); 
    colorStr += str[randomIdx]; // we will pick value of that index
}
return colorStr;
}
