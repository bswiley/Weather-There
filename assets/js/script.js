var date = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var image = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var temp = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var wind = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
var humidity = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]




var searchfrm = $("#searchfrm")
var searchbtn = $("#searchbtn")
var cCity = $("#currentCity")
var cList = $("#oldCityList")
var oCity1 = $("#oldCitty1")
var oCity2 = $("#oldCitty2")
var oCity3 = $("#oldCitty3")
var oCity4 = $("#oldCitty4")
var oCity5 = $("#oldCitty5")
var oCity6 = $("#oldCitty6")
var oCity7 = $("#oldCitty7")
var oCity8 = $("#oldCitty8")
var oCity9 = $("#oldCitty9")
var oCity10 = $("#oldCitty10")
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
temp[13] = $("#temp0")
wind[13] =$("#wind0")
humidity[13] = $("#humidity0")
date[21] =$("#date2")
image[21]=$("#image2")
temp[21] = $("#temp0")
wind[21] =$("#wind0")
humidity[21] = $("#humidity0")
date[29] =$("#date3")
image[29] =$("#image3")
temp[29] = $("#temp0")
wind[29] =$("#wind0")
humidity[29] = $("#humidity0")
date[37] =$("#date4")
image[37] =$("#image4")
temp[37] = $("#temp0")
wind[37] =$("#wind0")
humidity[37] = $("#humidity0")
console.log(date)



//var locRes = {"coord":{"lon":-81.6954,"lat":41.4995},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":277.29,"feels_like":276.06,"temp_min":274.57,"temp_max":280.18,"pressure":1030,"humidity":68},"visibility":10000,"wind":{"speed":1.54,"deg":100},"clouds":{"all":0},"dt":1681100474,"sys":{"type":2,"id":2016542,"country":"US","sunrise":1681124108,"sunset":1681171242},"timezone":-14400,"id":5150529,"name":"Cleveland","cod":200}
function getWeather(){

  city = getCity();
  queryUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=c678bf4ba5b2185e3326c14c3b82bf12'






}







    if (city) {
      queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
    }
  
  
    fetch(queryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {
        console.log(locRes); var datejs;
       // for(var i = 0; i< locRes.list.length ;i++) {
        for(var i = 5; i< locRes.list.length ;i+=8) {
          
          console.log (i)
          console.log (date[i].text())
          console.log(locRes.list.length)
         datejs=(dayjs.unix(locRes.list[i].dt).format('MMM D, YYYY, H A'));
         date[i].text(datejs)
          console.log(Math.round(locRes.list[i].wind.speed))
          console.log(locRes.list[i].main.humidity)
          
         imageIcon = 'https://openweathermap.org/img/wn/'+locRes.list[i].weather[0].icon+'@2x.png'
        console.log(imageIcon)
         image[i].attr('src',imageIcon)
  var temp = locRes.list[0].temp
  var date = locRes.dt
    console.log (temp)
    var unixFormat = dayjs.unix(date).format('MMM D, YYYY');
    console.log (date)
    console.log (unixFormat)
    var fahrenheit = Math.round((temp-273.15)*9/5+32)
    console.log (fahrenheit)

    }})
searchbtn.addEventListener ("click", fuction(e){
 stopDefault(e)
});


function stopDefault(e){
  e.preventDefault();
  getWeather();
}

function getCity(){
  city=searchfrm.val();
  ci
}



 