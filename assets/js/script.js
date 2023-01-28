function displayTime() {
    $('#time').text(dayjs())
}

function daysUntilDue(date) {
    return dayjs().diff(date, 'day')
}

function init() {
    timerInterval = setInterval(displayTime, 1000);
}

init()