const hrsEle=document.getElementById("hrs");
const minEle=document.getElementById("min");
const secEle=document.getElementById("sec");
const ampmEle=document.getElementById("am_pm");
const gmgnEle=document.getElementById("gm_gn");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
   let actualHrs=new Date().getHours();
   

   if(actualHrs>=12)
    ampm="PM"
    if(h>12){
        h=h-12;
      
        
    }

  
   if(actualHrs<12&& ampm==="AM")
       gmgnEle.innerText="Good Morning!";
     else  if(actualHrs>=12 && actualHrs<16 && ampm==="PM")
       gmgnEle.innerText="Its a wonderful Afternoon!";
       else if(actualHrs>=16 && actualHrs<=20 && ampm==="PM")
       gmgnEle.innerText="Its a wonderful Evening!";
       else if(actualHrs>20 &&actualHrs<24 && ampm==="PM")
       gmgnEle.innerText="Have a Good Night!";
    // h = h < 10 ? "0" + h : h;
    // m = m < 10 ? "0" + m : m;
    // s = s < 10 ? "0" + s : s;
  
    hrsEle.innerText = h < 10 ? "0" + h : h;;
    minEle.innerText = m < 10 ? "0" + m : m;
    secEle.innerText = s < 10 ? "0" + s : s;
    ampmEle.innerText = ampm;
 

    setTimeout(()=>{
        updateClock();
    },1000);  //to update after every sec
}

updateClock();

