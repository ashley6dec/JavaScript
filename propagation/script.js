div1= document.querySelector("#div1");
div2= document.querySelector("#div2");
div3= document.querySelector("#div3");


div1.addEventListener("click",()=>{
    console.log("GrandParent");
})
div2.addEventListener("click",()=>{
    console.log("Parent");
},true)  // true for capturing, by default false for bubbling
div3.addEventListener("click",(e)=>{
    console.log("Child");
     e.stopPropagation();  //to stop the flow here
})