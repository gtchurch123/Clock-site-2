const timeDisplay = document.getElementById('current-time');
const alarmAudio = document.getElementById('alarm-audio');
let alarmTime = null;

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeDisplay.textContent = timeString;

  if (alarmTime && timeString === alarmTime) {
    alarmAudio.play();
    alert("⏰ Alarm ringing!");
    alarmTime = null;
  }
}

function setAlarm() {
  const input = document.getElementById('alarm-time').value;
  if (input) {
    alarmTime = new Date(`1970-01-01T${input}:00`).toLocaleTimeString();
    alert(`Alarm set for ${alarmTime}`);
  }
}

setInterval(updateTime, 1000);
