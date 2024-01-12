// let btn=document.querySelectorAll("button");


// // btn.forEach((e)=>{
// // e.addEventListener("click",(event)=>{
// //     console.log(event.target.innerText)}
// //     )
// // });

let div= document.querySelector("div");
div.addEventListener("click",function(event){
    console.log("div is clicked");
    if(event.target.tagName=== "BUTTON"){
        console.log(event);
    console.log(event.target.innerText);
    }
})

