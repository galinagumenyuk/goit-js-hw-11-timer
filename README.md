# goit-js-hw-11-timer

// const targetDate = new Date(2021, 9, 9);
// const clockDays = document.querySelector('[data-value="days"]');
// const clockHours = document.querySelector('[data-value="hours"]');
// const clockMins = document.querySelector('[data-value="mins"]');
// const clockSecs = document.querySelector('[data-value="secs"]');
// let intervalId;

// intervalId = setInterval(function () {
// const currentDate = Date.now();
// const time = targetDate - currentDate;
// const { days, hours, mins, secs } = getTimeComponents(time);
// updateClockFace({ days, hours, mins, secs });
// console.log(`${days}:${hours}:${mins}:${secs}`);
// if (time === 0) {
// clearInterval(intervalId);
// }
// }, 1000);

// function pad(value) {
// return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
// const days = pad(Math.floor(time / (1000 _ 60 _ 60 _ 24)));
// const hours = pad(Math.floor((time % (1000 _ 60 _ 60 _ 24)) / (1000 _ 60 _ 60)));
// const mins = pad(Math.floor((time % (1000 _ 60 _ 60)) / (1000 _ 60)));
// const secs = pad(Math.floor((time % (1000 _ 60)) / 1000));
// return { days, hours, mins, secs };
// }

// function updateClockFace({ days, hours, mins, secs }) {
// clockDays.textContent = `${days}`;
// clockHours.textContent = `${hours}`;
// clockMins.textContent = `${mins}`;
// clockSecs.textContent = `${secs}`;
// }
