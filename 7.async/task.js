class AlarmClock {
    constructor() {

    }

    alarmCollection = [];
    intervalId = null;

    addClock(time,callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (time === this.alarmCollection.find((alarm) => {
            return alarm.time === time;
        })); {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date();
        let currentHours = currentDate.getHours();
        let currentMinutes = currentDate.getMinutes();
        function addZero(item) {
            if (item < 10) {
                item = '0' + item;
            }
            return item;
        }
        return addZero(currentHours) + ':' + addZero(currentMinutes);
    }

    start() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}