//1
var user = {};
var btn = document.querySelector('#validate');

btn.addEventListener('click', function() {

   var first = document.querySelector('.name');
   var  last = document.querySelector('.name_2');
   var email = document.querySelector("#mail");
   var zip = document.querySelector("#zip");

    user = {
        first: first.value,
        last :last.value,
        email: email.value,
        zip: zip.value
    }
    console.log(user);

    for(var key in user) {
        console.log(key, user[key])
    }
});


//2

var ex_2 = document.querySelector('.ex_2');

var city = {
    Zarephath: 728375,
    Reinerton: 864402,
    Spelter: 340533,
    Henrietta: 932557,
    Dyckesville: 421758,
    Yettem: 250492,
    Gracey: 551885,
    Floris: 216435,
    Davenport: 290139,
    Tioga: 653031
  }
  var max = Object.keys(city).reduce((a, b) => city[a] > city[b] ? a : b);  
  console.log(max);
  ex_2.innerHTML = "City with maximum population is"+ " : " + max;

//3
var w_res_1 = document.querySelector('.worker_1');
var w_res_2 = document.querySelector('.worker_2');

function Worker (name, surname, rate, days) {
    this.name = name;
    this.surname  = surname;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function() {
    return this.rate * this.days;
}

var worker = new Worker ('Іван', 'Іванов', 10, 31);
console.log(worker);
console.log( worker.getSalary());
w_res_1.innerHTML = JSON.stringify(worker) + "<br>" + "<br>" + "Salary is" + " " + worker.getSalary();

var worker_2 = new Worker ('Олександр', 'Дмитрович', 20, 21);
console.log(worker_2);
console.log( worker_2.getSalary());
w_res_2.innerHTML = JSON.stringify(worker_2) + "<br>" + "<br>" + "Salary is" + " " + worker_2.getSalary();

// 4

var secondsLabel = document.getElementById('seconds'), minutesLabel = document.getElementById('minutes'), hoursLabel = document
    .getElementById('hours'), totalSeconds = 0, startButton = document.getElementById('start'), stopButton = document.getElementById('stop'), resetButton = document
    .getElementById('reset'), timer = null;

function MyTimer() {};

 MyTimer.prototype.start = () =>{
   if (!timer) {
        timer = setInterval(setTime, 1000);
    }
}
MyTimer.prototype.stop = () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}
MyTimer.prototype.reset = () => {
    if (timer) {
        totalSeconds = 0;
    }
}

function setTime() {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60))+ " " + ":";
    hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600))+ " " + ":" ;
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

var timer_one = new MyTimer();

startButton.onclick = () => timer_one.start();
stopButton.onclick = () => timer_one.stop();
resetButton.onclick = () => timer_one.reset();
  