let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("startResume")
let clock = document.getElementById("number");

let minutes = 0;
let seconds = 0;


let stop = true;


// event listeners
startBtn.addEventListener("click", () => { 
    let counter  = setInterval( upByOne, 1000)
    stop = false;
    console.log("start")
})
stopBtn.addEventListener("click", () => { 
    clearInterval(counter)
    console.log("stop")});

function upByOne () {
    seconds+= 1;
    if (seconds === 60) {
        seconds = 0;
        minutes+= 1
        clock.innerHTML = `${minutes}:${seconds}`
    }
    else if (seconds >= 10 ) {
        clock.innerHTML = `${minutes}:${seconds}`
    }
    else {
        clock.innerHTML = `${minutes}:0${seconds}`
    }
}