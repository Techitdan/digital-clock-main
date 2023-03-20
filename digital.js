const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const seconds = document.querySelector("#second");
const init = function(){ const now = new Date();
//console.log(now);
const Day = now.getDate();
//console.log(Day);
const Month = now.getMonth();
const Year = now.getFullYear();
const Hour = now.getHours();
const Minute = now.getMinutes();
const Second = now.getSeconds();

day.textContent = Day;
month.textContent = Month;
year.textContent = Year;
hour.textContent = Hour;
minute.textContent = Minute;
seconds.textContent = Second;
};

setInterval(
  init
, 1000);

window.addEventListener("load", init);

