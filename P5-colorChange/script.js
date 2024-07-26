// Created Start Stop Variable
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

//Random Color Generate
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//Start button Action
let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.querySelector("body").style.backgroundColor = randomColor();
  }
};

//Stop button Action
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

// Created 2 Click Event's
start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
