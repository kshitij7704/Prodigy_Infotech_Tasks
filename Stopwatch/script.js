let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const startStopButton = document.getElementById('start-stop');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const lapsContainer = document.getElementById('laps');

function formatTime(ms) {
    const date = new Date(ms);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = formatTime(elapsedTime);
    }, 10);
    isRunning = true;
    startStopButton.textContent = 'Stop';
}

function stopStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = 'Start';
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    isRunning = false;
    startStopButton.textContent = 'Start';
    lapsContainer.innerHTML = '';
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = document.createElement('div');
    lapTime.textContent = formatTime(elapsedTime);
    lapsContainer.appendChild(lapTime);
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
    } 
    else {
        startStopwatch();
    }
});

lapButton.addEventListener('click', recordLap);
resetButton.addEventListener('click', resetStopwatch);