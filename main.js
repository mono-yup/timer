let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("startResume")
let clock = document.getElementById("number");
let startText = document.getElementById("startBtn");
let minutes = 0;
let seconds = 0;


let stop = true;

let counter;
let started = false;

let braker = 0;

// event listener
startBtn.addEventListener("click", () => { 
    if (braker === 0) {
        upByOne();
        braker = 1;
        counter = setInterval( upByOne, 1000);
    stop = false;
    started = true;
    console.log("start");
    }
})
stopBtn.addEventListener("click", () => { 
    if (started === true) {
        startText.innerText = "resume";
        startText.style.color = "orange";
    }
    clearInterval(counter)
    braker = 0;
    console.log("stop")});

function upByOne () {
    seconds+= 1;
    if (seconds === 60) {
        seconds = 0;
        minutes+= 1
        clock.innerHTML = `${minutes}:0${seconds}`;
    }
    else if (seconds >= 10 ) {
        clock.innerHTML = `${minutes}:${seconds}`;
    }
    else {
        clock.innerHTML = `${minutes}:0${seconds}`;
    }
}