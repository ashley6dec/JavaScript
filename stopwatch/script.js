let timerInMs=0;
let timer;

document.getElementById("start").addEventListener("click",startTimer)

document.getElementById("pause").addEventListener("click",pauseTimer)

document.getElementById("reset").addEventListener("click",resetTimer)

document.getElementById("lap").addEventListener("click",lapTimer)


function resetTimer(){
clearInterval(timer);
timerInMs=0;
updateTime(timerInMs)
}

function pauseTimer(){
    clearInterval(timer);
}


function startTimer(){
    timer = setInterval(()=>{
        timerInMs+=100;
updateTime(timerInMs);

    },100)//100ms interval is used
}

function lapTimer(){

    const sec= Math.floor(timerInMs/1000);//sec
    const min=Math.floor(timerInMs/60000);//min
    const hrs=Math.floor(timerInMs/3600000);//hrs
    const ms=(timerInMs % 1000)/10; //ms within 100 range
   
    let hours= document.createElement("hrs")
    let minutes= document.createElement("min")
  let seconds= document.createElement("sec")
  let milSeconds= document.createElement("msec")


     hours= document.getElementById("hrs1").value=hrs<10?"0" + hrs: hrs;
     minutes= document.getElementById("min1").value=min<10?"0" + min: min;
     seconds= document.getElementById("sec1").value=sec<10 ? "0"+sec : sec;
     milSeconds= document.getElementById("msec1").value=ms<10 ? "0"+ms:ms;

const lapTime1=document.getElementById("lapTime")
const div=document.createElement("div");
div.append(`${hours}:${minutes}:${seconds}:${ milSeconds}`)
lapTime1.append(div)

}

function updateTime(timerInMs){
    const sec= Math.floor(timerInMs/1000);//sec
    const min=Math.floor(timerInMs/60000);//min
    const hrs=Math.floor(timerInMs/3600000);//hrs
    const ms=(timerInMs % 1000)/10; //ms within 100 range


    document.getElementById("hrs").innerText=hrs<10?"0" + hrs%60: hrs%60;
    document.getElementById("min").innerText=min<10?"0" + min%60: min%60;
    document.getElementById("sec").innerText=sec<10 ? "0"+sec%60 : sec%60;
    document.getElementById("msec").innerText=ms<10 ? "0"+ms:ms;

    

}


