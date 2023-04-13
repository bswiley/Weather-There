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


async function getWeather(city){
  
}





async function getForecast(city){
  
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

var forStorage = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,]
for(var i = 5; i< 38 ;i+=8){
console.log(date)
console.log (forStorage)
console.log(weatherData.list.length)
datejs=(dayjs.unix(weatherData.list[i].dt).format('MMM D, YYYY'));
console.log(this.temp);
console.log(this.image);
console.log (this.date);
this.date[i].text(datejs);
console.log (datejs);
forStorage[i] = datejs;
imageIcon = 'https://openweathermap.org/img/wn/'+weatherData.list[i].weather[0].icon+'@2x.png';
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
humidity[i].text(displayHumid)
forStorage[i+4]=displayHumid;
}      
console.log(forStorage)
saveStorage = {
  "Day1": [forStorage[5],forStorage[6],forStorage[7],forStorage[8],forStorage[9]],
  "Day2": [forStorage[13],forStorage[14],forStorage[15],forStorage[16],forStorage[17]],
  "Day3": [forStorage[21],forStorage[22],forStorage[23],forStorage[24],forStorage[25]],
  "Day4": [forStorage[29],forStorage[30],forStorage[31],forStorage[32],forStorage[33]],
  "Day1": [forStorage[37],forStorage[38],forStorage[39],forStorage[40],forStorage[41]]
 };
console.log(saveStorage);
localStorage.setItem((city),JSON.stringify(saveStorage));
console.log(saveStorage);
});
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



 