class CountdownTimer {

    #intervalId = null;
    #clockDays;
    #clockHours;
    #timerElement;
    #clockMins;
    #clockSecs;
    
    constructor(targetDate, selector) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.#initFaceElements();
    }

    #initFaceElements() {
        this.timerElement = document.querySelector(this.selector);
        this.#clockDays = this.timerElement.querySelector('[data-value="days"]');
        this.#clockHours = this.timerElement.querySelector('[data-value="hours"]');
        this.#clockMins = this.timerElement.querySelector('[data-value="mins"]');
        this.#clockSecs = this.timerElement.querySelector('[data-value="secs"]');
    }

    #updateClockFace({ days, hours, mins, secs }) {
        this.#clockDays.textContent = `${days}`;
        this.#clockHours.textContent = `${hours}`;
        this.#clockMins.textContent = `${mins}`;
        this.#clockSecs.textContent = `${secs}`;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    start() {
        let me = this;
        this.intervalId = setInterval(function () {
            const time = me.targetDate - Date.now();;
            const { days, hours, mins, secs } = me.#getTimeComponents(time);
            me.#updateClockFace({ days, hours, mins, secs });
            console.log(`${days}:${hours}:${mins}:${secs}`);
            if (time < 1000) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    #getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
   

}

let timer = new CountdownTimer( new Date(2021, 9, 9, 23, 23, 23), '#timer-1');
timer.start();