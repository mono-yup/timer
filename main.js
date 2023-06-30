let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("startResume")
let clock = document.getElementById("number");

let minutes = 0;
let seconds = 0;


let stop = true

while (stop == false) {
    setTimeout( () => {
    upByOne()
    }, 1000)
}

function upByOne () {
    seconds+= 1;
    if (seconds === 60) {
        seconds = 0;
        clock.innerHTML = `${minutes+1} : ${seconds}`
    }
    else if (seconds >= 10 ) {
        clock.innerHTML = `${minutes} : ${seconds}`
    }
    else {
        clock.innerHTML = `${minutes} : 0${seconds}`
    }
}