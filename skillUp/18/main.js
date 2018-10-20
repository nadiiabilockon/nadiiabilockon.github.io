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

var shift = 0;
var test = document.querySelector('.test');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');
var start_shift;
var timer;

function  Timer(){
    start_shift = function () {
        test.style.marginLeft = shift + "px";
        shift+=5;
    };
}
Timer.prototype.start = () =>{
    timer = setInterval(start_shift,50);
}
Timer.prototype.stop = () =>{
    timer = clearInterval(timer);
}
Timer.prototype.reset = () =>{
    test.style.marginLeft = 0 + "px";
}    

var timer_one = new Timer();

start.onclick = () => timer_one.start();
stop.onclick = () => timer_one.stop();
reset.onclick = () => timer_one.reset();

