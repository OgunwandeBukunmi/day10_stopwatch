let display = document.querySelectorAll(".display");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let redo = document.querySelector("#redo");

let hour = 0;
let minutes = 0;
let second = 0;

let interval;

function setDisplay() {
  display[0].textContent =
    JSON.stringify(hour).length === 1 ? `0${hour}` : hour;
  display[1].textContent =
    JSON.stringify(minutes).length === 1 ? `0${minutes}` : minutes;
  display[2].textContent =
    JSON.stringify(second).length === 1 ? `0${second}` : second;
}
function getTime() {
  second++;
  if (second == 60) {
    second = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hour++;
  }
  setDisplay();
}

start.addEventListener("click", (e) => {
  if (interval) {
    return;
  } else {
    interval = setInterval(getTime, 1000);
  }
});
pause.addEventListener("click", () => {
  clearInterval(interval);
});
redo.addEventListener("click", () => {
  hour = 0;
  minutes = 0;
  second = 0;
  interval = setInterval(getTime, 1000);
  setDisplay();
});
