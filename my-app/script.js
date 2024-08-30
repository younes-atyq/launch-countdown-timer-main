let currentDate = new Date().getTime();
const endDate = new Date(currentDate + 9 * 24 * 60 * 60 * 1000).getTime();
// console.log((endDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24);

const dayTop = document.querySelector("[data-top-days]");
const dayBottom = document.querySelector("[data-bottom-days]");
const hoursTop = document.querySelector("[data-top-hours]");
const hoursBottom = document.querySelector("[data-bottom-hours]");
const minutesTop = document.querySelector("[data-top-minutes]");
const minutesBottom = document.querySelector("[data-bottom-minutes]");
const secondsTop = document.querySelector("[data-top-seconds]");
const secondsBottom = document.querySelector("[data-bottom-seconds]");

let number = 0;

setInterval(() => {
  currentDate = new Date().getTime();
  const dateGap = Math.floor((endDate - currentDate) / 1000);
  updateTime(dateGap);
}, 1000);
const updateTime = (time) => {
  const seconds = time;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  increaseTime(secondsTop, secondsBottom, Math.floor(seconds % 60));
  increaseTime(minutesTop, minutesBottom, Math.floor(minutes % 60));
  increaseTime(hoursTop, hoursBottom, Math.floor(hours % 24));
  increaseTime(dayTop, dayBottom, Math.floor(days));
};

const increaseTime = (top, bottom, time) => {
  const existsTime = top.innerText;
  // console.log(existsTime);
  if (+existsTime === +time) return;

  const topDiv = document.createElement("div");
  const bottomDiv = document.createElement("div");
  const currentTime = time < 10 ? `0${time}` : `${time}`;

  topDiv.innerText = existsTime;
  bottomDiv.innerText = currentTime;

  topDiv.classList.add("top-added", "flip-top");
  bottomDiv.classList.add("bottom-added", "flip-bottom");

  top.parentElement.appendChild(topDiv);
  top.parentElement.appendChild(bottomDiv);

  topDiv.addEventListener("animationstart", () => {
    top.innerText = currentTime;
  });
  bottomDiv.addEventListener("animationend", () => {
    bottom.innerText = currentTime;
    topDiv.remove();
    bottomDiv.remove();
  });
};

// increaseTime();

// updateTime(Math.floor(new Date().getMilliseconds() / 1000));
