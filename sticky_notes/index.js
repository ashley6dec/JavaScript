// const button=document.querySelector("button");
// button.addEventListener('click',()=>{
//     const textArea = document.querySelector("text_area");
//     const colorInput= document.querySelector("#colorBar");
    // console.log("VALUE",colorBar);
    const ct=document.querySelector(".colorAndText").children;
    //console.log(ct);
   
    // let textAreaValue=ct[0].value;  //accessing textarea value
    // console.log(textAreaValue);
    // let colorValue = ct[1].children[0].value;
    // console.log(colorValue);


    let btn=document.querySelector(".button");
    let btn2=document.querySelector(".btn2");
   // console.log(btn2);
    let rightContainer = document.querySelector(".right_container");
   
   
    btn.addEventListener("click",()=>{
        let textAreaValue=ct[0].value;
        let colorValue = ct[1].children[0].value;  //accessing color value ct[1] is div inside which color is there at[0]
        if(ct[0].value ===""){
        alert("Please enter some text!!!");
        return;}
    makeStickyNotes(textAreaValue,colorValue);
    ct[0].value="";  //after writing text again it should be empty after adding note
    document.querySelector(".notesNotAdded").style.display = "none"; //to remove you have ot added text
    removeStickyNotes();

});

  function removeStickyNotes(){
     btn2 = document.querySelectorAll(".btn2"); //fetching all x buttons
     btn2.forEach((singleBtn)=>{
        singleBtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();//once x is clicked it should remove parent element
        });
     });

     let rc=document.querySelector(".right_container");

     rc.addEventListener("click",(e)=>{
        if(e.target.innerText==="x"){
            e.target.parentElement.remove();
        }
     });
  }


 function makeStickyNotes(text,color){
    console.log(text,color);
    let div=document.createElement("div");
    div.innerHTML = `
    <p>${text}</p>
    <button class="btn2">X</button>`;  //inside div text and button is there
    div.style.backgroundColor=color;
    rightContainer.appendChild(div);
    
 }
    
