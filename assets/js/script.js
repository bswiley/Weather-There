var date = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var image = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var temp = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var wind = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var humidity = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]




var searchfrm = $("#searchfrm")
var searchbtn = $("#searchbtn")
var cCity = $("#currentCity")
var cList = $("#oldCityList")
var oCity1 = $("#oldCity1")
var oCity2 = $("#oldCity2")
var oCity3 = $("#oldCity3")
var oCity4 = $("#oldCity4")
var oCity5 = $("#oldCity5")
var oCity6 = $("#oldCity6")
var oCity7 = $("#oldCity7")
var oCity8 = $("#oldCity8")
var oCity9 = $("#oldCity9")
var oCity10 = $("#oldCity10")
var card1 = $("card1")
var card2 = $("card2")
var card3 = $("card3")
var card4 = $("card4")
var card5 = $("card5")
var city = "Cleveland"
 date[5] = $("#date0")
 image[5] =$("#image0")
 temp[5] = $("#temp0")
 wind[5] =$("#wind0")
humidity[5] = $("#humidity0")
date[13] =$("#date1")
image[13] =$("#image1")
temp[13] = $("#temp1")
wind[13] =$("#wind1")
humidity[13] = $("#humidity1")
date[21] =$("#date2")
image[21]=$("#image2")
temp[21] = $("#temp2")
wind[21] =$("#wind2")
humidity[21] = $("#humidity2")
date[29] =$("#date3")
image[29] =$("#image3")
temp[29] = $("#temp3")
wind[29] =$("#wind3")
humidity[29] = $("#humidity3")
date[37] =$("#date4")
image[37] =$("#image4")
temp[37] = $("#temp4")
wind[37] =$("#wind4")
humidity[37] = $("#humidity4")
console.log(date)
console.log(temp)



//var weatherData = {"coord":{"lon":-81.6954,"lat":41.4995},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":277.29,"feels_like":276.06,"temp_min":274.57,"temp_max":280.18,"pressure":1030,"humidity":68},"visibility":10000,"wind":{"speed":1.54,"deg":100},"clouds":{"all":0},"dt":1681100474,"sys":{"type":2,"id":2016542,"country":"US","sunrise":1681124108,"sunset":1681171242},"timezone":-14400,"id":5150529,"name":"Cleveland","cod":200}
function getWeather(){
  city = getCity();
  queryUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
}
    if (city) {
      queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
    }
  
  console.log(date)
  console.log(temp)
  console.log(image)
    fetch(queryUrl,date,temp,wind,humidity)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
    .then(function (weatherData) {
        console.log(weatherData)
      
var datejs;
// for(var i = 0; i< weatherData.list.length ;i++) {

var forStorage = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,]
for(var i = 5; i< 38 ;i+=8){
console.log(date)
//  console.log (date[i].text())
console.log(weatherData.list.length)
datejs=(dayjs.unix(weatherData.list[i].dt).format('MMM D, YYYY'));
console.log(this.temp);
console.log(this.image);
console.log (this.date);
this.date[i].text(datejs);
console.log (datejs);
forStorage[i] = datejs;
imageIcon = 'https://openweathermap.org/img/wn/'+weatherData.list[i].weather[0].icon+'@2x.png'
console.log(imageIcon);         
image[i].attr('src',imageIcon);
forStorage[i+1]= imageIcon
var weatherTemp = weatherData.list[i].main.temp;
var displayTemp = Math.round((weatherTemp-273.15)*9/5+32)+"°F";
console.log(displayTemp);
forStorage[i+2] = displayTemp
this.temp[i].text(displayTemp);
var weatherWind = weatherData.list[i].wind.speed
var displayWind = Math.round(weatherWind*2.237)+"MPH"
console.log (displayWind);
forStorage[i+3]= displayWind;
this.wind[i].text(displayWind);
var weatherhumid = weatherData.list[i].main.humidity
var displayHumid = weatherhumid +"%"
console.log (displayHumid) 
this.humidity[i].text(displayHumid)
forStorage[i=4]=displayHumid;
console.log(Math.round(weatherData.list[i].wind.speed))
console.log(weatherData.list[i].main.humidity)
          
imageIcon = 'https://openweathermap.org/img/wn/'+weatherData.list[i].weather[0].icon+'@2x.png'
console.log(imageIcon)
this.image[i].attr('src',imageIcon);
var temp = weatherData.list[0].temp
var date = weatherData.dt
console.log (temp)
var unixFormat = dayjs.unix(date).format('MMM D, YYYY');
console.log (date)
console.log (unixFormat)
var fahrenheit = Math.round((temp-273.15)*9/5+32)
console.log (fahrenheit)
console.log(forStorage)}});
//searchbtn.addEventListener ("click", fuction(e){
 //stopDefault(e)
//});


function stopDefault(e){
  e.preventDefault();
  getWeather();
}

function getCity(){
  city=searchfrm.val();
  ci
}



 