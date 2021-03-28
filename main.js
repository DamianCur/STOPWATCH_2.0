const mainBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const time = document.querySelector(".time div");

let active = false;
let timerID;
let number = 0;


const startTimer = () => {
    if (!active) {
        active = !active
        mainBtn.textContent = "Stop";
        timerID = setInterval(stoper, 10);

    } else {
        active = !active
        mainBtn.textContent = "Start";
        clearInterval(timerID);
    }
}

const stoper = () => {
    number++;
    time.textContent = (number / 100).toFixed(2);
}


const resetTimer = () => {
    active = false
    number = 0;
    time.textContent = "---"
    clearInterval(timerID)
    mainBtn.textContent = "Start";
}


mainBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);