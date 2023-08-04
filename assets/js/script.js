// This function updates time on the page
function displayTime() {
    $('#time').text(dayjs())
}
// This works out how many days left
function daysUntilDue(date) {
    return dayjs().diff(date, 'day')
}

function init() {
    timerInterval = setInterval(displayTime, 1000);
}

init()