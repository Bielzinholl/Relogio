let hourInput = document.querySelector("#hour");
let minuteInput = document.querySelector("#minute");
let secondInput = document.querySelector("#second");



setInterval (() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
   
    hourInput.innerHTML = hour;
    minuteInput.innerHTML = minute;
    secondInput.innerHTML = second;
    

    if (hour < 10) {
        hourInput.innerHTML = `0${hour}`;
    }
    if (minute < 10) {
        minuteInput.innerHTML = `0${minute}`;
    }
    if (second < 10) {
        secondInput.innerHTML = `0${second}`;
    }
},1000);


let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");

setInterval(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    dayInput.innerHTML = day < 10 ? `0${day}` : day;
    monthInput.innerHTML = month < 10 ? `0${month}` : month;
    yearInput.innerHTML = year;
}, 1000);