//1
var ex_1 = document.querySelector(".ex_1");
var arr_random = [];
function randomNumder(number) {
    for(var i=0; i<number; i++) {
        var random = function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        arr_random.push(random(-100, 101));    
    }
    var arr_filt = arr_random.filter(function(item){
      return item > 10;
   })
   console.log(arr_filt);
   ex_1.innerHTML = arr_filt;
}
randomNumder(10);


//2

var string = document.querySelector(".lorem").innerHTML;
var new_str = document.querySelector(".lorem_new");
var arr_word = string.split(" ");

var arr_word_new = [];
for( var i = 0; i < arr_word.length; i++){
     arr_word_new.push(arr_word[i]);
}     
var sort = arr_word_new.sort(function(current, next){
    return current.length - next.length;
}); 

new_str.innerHTML = sort.join(" ");

//3
var users = [
  {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
]
  var arr_sort = [];
  const MAX  = 2000;
  var sum = 0;

  for(var i= 0; i <users.length; i++){
    
   const new_bal =  Number(users[i].balance.replace(/[^0-9.-]+/g,""));;
      if(new_bal < MAX) continue;
    sum+=new_bal;
    arr_sort.push(users[i].phone);
  }
  console.log(arr_sort);
  sum = "$" + sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  console.log("All balance = " + sum);

  //4 
  var array =  [1, 2, 1, 4, 1, 3];
  var result = _.uniq(array);
  var uniq = document.querySelector(".uniq");
  uniq.innerHTML = "[" + result +"]";
  console.log(result);