let bre = 5;
let ses = 25;
let sec = 0;
let isSes = true;
let isStarted = false;
let isEnded = false;
let isReset = false;
let sesTime;
const breLen = document.getElementById("break-length");
const sesLen = document.getElementById("session-length");
const brein = document.getElementById("break-increment");
const brede = document.getElementById("break-decrement");
const sesin = document.getElementById("session-increment");
const sesde = document.getElementById("session-decrement");
const resetBtn = document.getElementById("reset");
const timerLab = document.getElementById("timer-label");
const timeLeft = document.getElementById("time-left");
const ssBtn = document.getElementById("start_stop");
const alarm = document.getElementById("beep");

const init = () => {
  breLen.innerHTML = `${bre}`;
  sesLen.innerHTML = `${ses}`;
  if (isSes) {
    sec = ses * 60;
    timeLeft.innerHTML = `${ses}:00`;
  }
  else {
    sec = bre * 60;
    timeLeft.innerHTML = `${bre}:00`;
  }
}

const startClock = () => {
  // setInterval() if you want to put parameter need to use call back function
  if (!isStarted){
    if (isEnded) {
      if (isSes) {
        sec = ses * 60;
        isEnded = false;
      }
      else {
        sec = bre * 60;
        isEnded = false;
      }
    }
    sesTime = setInterval(countDown, 1000);
    isStarted = !isStarted;
  }
  else {
    clearInterval(sesTime);
    isStarted = !isStarted;
  }
}

const countDown = () => {
  if (sec !== 0) {
    sec--;
  } 
  else {
    alarm.play();
    if (isSes && !isReset) {
      timerLab.innerHTML = `Session`;
      sec = ses * 60;
      isSes = false;
      isEnded = true;
      isReset = false;
    }
    else {
      timerLab.innerHTML = `Break`;
      sec = bre * 60;
      isSes = true;
      isEnded = true;
      isReset = false;
    }
  }
  timeLeft.innerHTML = `${Math.floor(sec / 60) < 10 ? "0" + Math.floor(sec / 60) : Math.floor(sec / 60)}:${sec  % 60 < 10 ? "0" + sec % 60 : sec % 60}`;
}

const reset = () => {
  ses = 25;
  bre = 5;
  clearInterval(sesTime);
  timerLab.innerHTML = `Session`;
  breLen.innerHTML = `${bre}`;
  sesLen.innerHTML = `${ses}`;
  timeLeft.innerHTML = `${ses}:00`;
  isStarted = false;
  isSes = true;
  isEnded = true;
  isReset = true;
  alarm.pause();
  alarm.currentTime = 0;
}

brein.addEventListener("click", () => {
  if (bre < 60 && !isStarted) {
    bre++;
    init();
  }
});
brede.addEventListener("click", () => {
  if (bre > 1 && !isStarted) {
    bre--;
    init();
  }
});
sesin.addEventListener("click", () => {
  if (ses < 60 && !isStarted) {
    ses++;
    init();
  }
});
sesde.addEventListener("click", () => {
  if (ses > 1 && !isStarted) {
    ses--;
    init();
  }
});
resetBtn.addEventListener("click", reset);
ssBtn.addEventListener("click",startClock);

init();