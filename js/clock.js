const clock = document.querySelector("h2#clock");
const calendar = document.querySelector("h2#calendar");
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const day = days[date.getDay() - 1];

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getCalendar() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");
    const day = days[date.getDay() - 1];

    calendar.innerText = `${year}.${month}.${dates} ${day}\n\n`;
}

clock.className = "clock-font";
calendar.className = "calendar-font";

getClock();
getCalendar();
setInterval(getClock, 1000);