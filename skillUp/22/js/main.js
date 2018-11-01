$(document).ready(function() {
  let box_left = $('#posts');
  let box_rigth = $('#posts_2');
  // get post
  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
    success: function(data) {
      box_left.prepend('<p class="city"> Weather in: '+ data.name  + '</p>');
      box_left.append(
      '<p> Humidity: '+ data.main.humidity + " %" + '</p>'+
      '<p> Pressure: '+ data.main.pressure + " hpa" +'</p>' +
      '<p> Description: '+ data.weather[0].description +'</p>'
      );
      box_rigth.append(  
        '<img src="http://openweathermap.org/img/w/10d.png" alt="Icon depicting current weather.">' +
        '<p> Tempeture: '+ data.main.temp  + " °C'" + '</p>'+
        '<p> Wind speed : '+ data.wind.speed + '</p>'+
        '<p> Deg: '+ data.wind.deg  + " °" +'</p>' 
      )
    }
  });

  // Current date
  let m_names = new Array("January", "February", "March", 
  "April", "May", "June", "July", "August", "September", 
  "October", "November", "December");

  let d = new Date();
  let curr_date = d.getDate();
  let sup = "";
  if (curr_date == 1 || curr_date == 21 || curr_date ==31){
    sup = "st";
  }else if (curr_date == 2 || curr_date == 22){
    sup = "nd";
  }else if (curr_date == 3 || curr_date == 23){
    sup = "rd";
  }else{
    sup = "th";
  }

  let curr_month = d.getMonth();
  let curr_year = d.getFullYear();
  let curr_hour = d.getHours();
  let curr_min = d.getMinutes();

  $('#date').html(curr_date + "<SUP>" + sup + "</SUP> " 
  + m_names[curr_month] + " " + curr_year + '<br>' + curr_hour + " : " + curr_min + " PM");
});



  