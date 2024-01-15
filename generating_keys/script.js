
let divA=document.querySelector(".key_pressed");

let divB=document.querySelector(".key_code");
divB.style.display="none";

let pressed=document.getElementById
window.addEventListener(
    "keyup",
    (event) => {
     let p = document.createElement("p");
     let code = document.createElement("code");
     divA.innerHTML="";
     divB.innerHTML="";
     divA.style.display="block";
     divB.style.display="block";
      p.textContent = `You pressed ${event.key} key`;
      code.textContent = `Key code is ${event.which} `;
     
      
      let div1=document.querySelector(".key_pressed").appendChild(p);
      let div2=document.querySelector(".key_code").appendChild(code);
      window.addEventListener("keydown",(e)=>{
       
        div1.innerHTML="";
        div2.innerHTML="";
        divB.style.display="none";
        divA.style.display="none";

      });
     
      
    },
    true,
  );
  
  
