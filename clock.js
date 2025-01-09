let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let AMPM = document.getElementById("AMPM");

setInterval(() => {
    let clock = new Date();
    let hrs = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();

    // here we are converting in  12-hour format
    let period = "AM";  // this will be the Default period
    if (hrs >= 12) {
        period = "PM";
    }
    if (hrs > 12) {
        hrs = hrs - 12;  // here we Adjust for 12-hour format
    }
    if (hrs == 0) {
        hrs = 12;  // Midnight is 12
    }

    // Add leading zero if the time is less than 10
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Set AM/PM
    AMPM.innerHTML = period;

    // Display time
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}, 1000);
