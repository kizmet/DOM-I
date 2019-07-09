let startTime = 0;
let secondTens = document.getElementById("secondTens");
secondTens.innerText = 0;
let secondOnes = document.getElementById("secondOnes");
secondOnes.innerText = 0;
let msHundreds = document.getElementById("msHundreds");
msHundreds.innerText = 0;
let msTens = document.getElementById("msTens");
msTens.innerText = 0;

let secondsId;
let msId;
let msHId;
let seconds; 
let msH ;
let msT ;

function secondsTime() {
  seconds = Number(secondOnes.innerText);
  seconds == 9 ? reset(1) : 
  secondOnes.innerText = seconds + 1;
}

function msHundredsTime() {
  msH = Number(msHundreds.innerText);
  msH == 9 ? msHundreds.innerText = 0 :
  msHundreds.innerText = msH + 1;
}

function msTensTime() {
  msT = Number(msTens.innerText);
  msT == 9 ? msTens.innerText = 0 :
  msTens.innerText = msT + 1;
}

function createTimer() {
  secondsId = setInterval(secondsTime, 1000);
  msId = setInterval(msHundredsTime, 100);
  msHId = setInterval(msTensTime, 10);
}

function stopTimer() {
  clearTimeout(secondsId);
  clearTimeout(msId);
  clearTimeout(msHId);
}

function reset(num) {
  clearTimeout(secondsId);
  clearTimeout(msId);
  clearTimeout(msHId);
  secondTens.innerText = num;
  secondOnes.innerText = 0;
  msHundreds.innerText = 0;
  msTens.innerText = 0;
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => createTimer());

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => stopTimer());

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => reset(0));
