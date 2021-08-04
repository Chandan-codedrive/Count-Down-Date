let daysItems = document.getElementById("days");
let hoursItems = document.getElementById("hours");
let minItems = document.getElementById("min");
let secItems = document.getElementById("sec");

let countDown = () => {
    let targetDate = new Date("1 Jan 2022")
    let currentDate = new Date();
    let remainDay = targetDate - currentDate;
    console.log(remainDay);

    let days = Math.floor(remainDay/1000/60/60/24); //console.log(days)
    let hours = Math.floor(remainDay/1000/60/60)%24; //console.log(hours)
    let min = Math.floor(remainDay/1000/60)%60;
    let sec = Math.floor(remainDay/1000)%60; //console.log(sec)

    daysItems.innerHTML= days;
    hoursItems.innerHTML = hours;
    minItems.innerHTML = min;
    secItems.innerHTML = sec;
}

countDown()
setInterval(countDown, 1000)