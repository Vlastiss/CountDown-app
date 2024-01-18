const eldays = document.getElementById('days')
const elhours = document.getElementById('hours')
const elminutes = document.getElementById('minutes')
const elseconds = document.getElementById('seconds')

const flight = " 26 jan 2024 08:15:00"

function countdown() {
    const flyDate = new Date(flight)
    const currentDate = new Date();

    const totalSeconds = (flyDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    eldays.innerHTML = days;
    elhours.innerHTML = hours;
    elminutes.innerHTML = minutes;
    elseconds.innerHTML = seconds;
}

countdown();
