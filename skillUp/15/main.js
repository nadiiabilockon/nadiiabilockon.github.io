//1

var string = document.querySelector('#str');

function trimString(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength) + "...";
    }
};

string.innerHTML = trimString(string.innerHTML, 20);

//2

var string_2 = document.querySelector('#str_2').innerHTML;
var html_result = document.querySelector('#result');

function searchString(str, word){
    const pattern = new RegExp(word, "gi");
    return str.match(pattern);
}

var searchwWord = "lo";
var result = searchString(string_2, searchwWord);

if(result != null){
    html_result.innerHTML = "The matches of"+ " " + '\"'+ searchwWord +'\"'+ ": " + result.length;
}
else{
    html_result.innerHTML = "Dont match of" +" "+ '\"' + searchwWord + '\"';
}

//3

function checkDate() {
    var dateForm  = document.querySelector('#date-form');
    var startDate = new Date(dateForm['start-date'].value);
    var endDate   = new Date(dateForm['end-date'].value);
    var inner = document.querySelector("#diff");
    
    var diff = new Date(endDate- startDate);
    var days = Math.floor(diff/1000/60/60/24);
    var result = days +" Days";
    inner.innerHTML = result;
  }
  
  //4   
  
  var input = document.querySelector(".name");
  var input_2 = document.querySelector(".name_2");

  input.addEventListener("input", function() {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
  })
  input_2.addEventListener("input", function() {
    this.value = this.value[0].toUpperCase() + this.value.slice(1);
  })

  var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Email address entered is not valid");
  } else {
    email.setCustomValidity("");
  }
});
