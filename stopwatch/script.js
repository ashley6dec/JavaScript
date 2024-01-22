let timerInMs=0;
let timer;

document.getElementById("start").addEventListener("click",startTimer)

document.getElementById("pause").addEventListener("click",pauseTimer)

document.getElementById("reset").addEventListener("click",resetTimer)


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


