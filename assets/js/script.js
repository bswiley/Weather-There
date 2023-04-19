/*this section is setting up the variables in general, but especially the variables
that control the html elements.  Since there are many things that need to be changed
the weather elements are assigned to arrays. the longer arrays are created to match
the length necessary to match the weather objects comming in from openweathermap, but
only used at intervals of eight to match the weather items used.  The shorter arrays
are used to manipulate the data in and out of localStorage.*/
var forStorage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2,]
var date = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var image = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var wind = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var humid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var date2 = [0, 1, 2, 3, 4]
var temp2 = [0, 1, 2, 3, 4]
var icon2 = [0, 1, 2, 3, 4]
var wind2 = [0, 1, 2, 3, 4]
var humid2 = [0, 1, 2, 3, 4]
var submit = $(".searchbtn");
var formContent = $("#searchfrm");
var buttonList = $("#buttonList");
var cityList = ["Safeword","Safeword2"];
var cityListNum;
var datejs;
var bHumid = $("#bHumid");
var bWind = $("#bWind");
var bTemp = $("#bTemp");
var cityDate = $("#cityDate");
var bImage = $("#bImage");
var searchfrm = $("#searchfrm");
var searchbtn = $("#searchbtn");
var cCity = $("#currentCity");
var cList = $("#oldCityList");
var oCity1 = $("#oldCity1");
var oCity2 = $("#oldCity2");
var oCity3 = $("#oldCity3");
var oCity4 = $("#oldCity4");
var oCity5 = $("#oldCity5");
var oCity6 = $("#oldCity6");
var oCity7 = $("#oldCity7");
var oCity8 = $("#oldCity8");
var oCity9 = $("#oldCity9");
var oCity10 = $("#oldCity10");
var card1 = $("card1");
var card2 = $("card2");
var card3 = $("card3");
var card4 = $("card4");
var card5 = $("card5");
date[5]  = date2[0]  = $("#date0");
image[5] = icon2[0]  = $("#image0");
temp[5]  = temp2[0]  = $("#temp0");
wind[5]  = wind2[0]  = $("#wind0");
humid[5] = humid2[0] = $("#humid0");
date[13] = date2[1]  = $("#date1");
image[13]= icon2[1]  = $("#image1");
temp[13] = temp2[1]  = $("#temp1");
wind[13] = wind2[1]  = $("#wind1");
humid[13]= humid2[1] = $("#humid1");
date[21] = date2[2]  = $("#date2");
image[21]= icon2[2]  = $("#image2");
temp[21] = temp2[2]  = $("#temp2");
wind[21] = wind2[2]  = $("#wind2");
humid[21]= humid2[2] = $("#humid2");
date[29] = date2[3]  = $("#date3");
image[29]= icon2[3]  = $("#image3");
temp[29] = temp2[3]  = $("#temp3");
wind[29] = wind2[3]  = $("#wind3");
humid[29]= humid2[3] = $("#humid3");
date[37] = date2[4]  = $("#date4");
image[37]= icon2[4]  = $("#image4");
temp[37] = temp2[4]  = $("#temp4");
wind[37] = wind2[4]  = $("#wind4");
humid[37]= humid2[4] = $("#humid4");
var today = dayjs().format('YYYYMMDD');


/*This function makes a call to openweather just to test if it will work (i.e. that the user typed a 
a real city).  If it doesn't work an alert is sent up and a button isn't created.  If the connection is 
good it sends on to makeCityButton() with the good city name included. */
async function testCity(city) {
  var Url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
  fetch(Url)
    .then(function (response) {
      if (!response.ok) {
        alert("That doesn't appear to be a city.  Are you sure you spelled it correctly?  If not, please try it again")
        throw response.json();
}else{makeCityButton(city,true)}})}
  

/*This is the start of the actual (i.e. not part of a function) code where it 
searches for cities that may have been stored in localStorage already today.  
If it doesn't find any local storage it doesn't do anything, but if it does it
populates the buttons with the city names making them ready for use.  After that
the code ends and the only thing that can happen next is the reaction to an 
eventhandler/listener. 
*/
if (!localStorage.getItem(today)) {
  localStorage.clear();
    var storage = false}
else {
  var storage = true
  var storedCities = JSON.parse(localStorage.getItem(today));
  var storedCitiesArray = storedCities["cities"];
  var storedCitiesList = [...new Set(storedCitiesArray)]
  var storedCitiesNum = storedCitiesList.length;
  for (var i = 0; i < storedCitiesNum; i++) {
    city = storedCitiesList[i]
    cityList = storedCitiesList;
    var buttonEl = $("<button>");
    buttonEl.addClass(city).text(city);
    buttonEl.appendTo($("#buttonList"));}};


/* This is the function is that operates after the Submit button's 
eventListener sends it here.  It mainly just gets the user's city
information from the form and passes it to toTitleCase() to be 
capitalized before being sent on to testCity() to verify it's a 
real city before a button is made.  
*/
function handleSubmit() {
  city = formContent.val();
  city = toTitleCase(city);
  testCity(city);};


  /* This function takes the "city" information passed from the 
testCity() function to make a button for the city name from the 
form field after its been capitalized and checked.  After making
the button on the page it also initiates the correct function to 
create a localStorage entry for today for with the city's name or
add the city to the localStorage list that already exits and then
initates the functions to get the current conditions and the 
five-day weather forcast for that city. If the button already exists
it doesn't add another button. */
var makeCityButton = function (city,test) {
        if (cityList.includes(city)) {
    getForecast(city);
    getWeather(city);
    return;}
  else if (!cityList.includes(city)) {
    cityList.push(city);}
    var buttonEl = $("<button>");
    buttonEl.addClass(city).text(city);
    buttonEl.appendTo($("#buttonList"));
    if (storage === true) {
      if (cityList.length >= 2) {
        index = cityList.indexOf("Safeword") //this removes the superflous words
        x = cityList.splice(index, 1);       // from 
        index = cityList.indexOf("Safeword2")//the cityList array
        x = cityList.splice(index, 1);
       AddCity(city);}}
    if (storage === false) {
      storage = true
      StoreCity(city);}
    getForecast(city);
    getWeather(city);}


/* The MakeCityButton() sends to here when there isn't a city by the variable name "city"
stored in localStorage for "today". An entry will be made and the city passed to the function
becoming the only city that exists in localStorage.*/ 
function StoreCity(city) {
  var saveString = {
    "cities": [city]}
  localStorage.setItem(today, JSON.stringify(saveString));}


/*The MakeCitybutton() sends to here if there are already cities in local storage.  
Since that is the case, it pulls the cities from local storage, adds the recently 
added city to the array and stores everything back in localStorage*/
function AddCity(city) {
  var storedString = JSON.parse(localStorage.getItem(today));
  var oldCities = storedString["cities"]
  oldCities.push(city);
  var allCities = [...new Set(oldCities)]//this prevents duplicates in localStorage
  saveString = {"cities": allCities};
  localStorage.setItem(today, JSON.stringify(saveString))}


/*this is the eventlistner/handler for the city buttons that are created for the user,
if they exist. After a 'click' the city name is collected from the button that was clicked
and sent forward to the loadData() function that is called at the end*/
buttonList.click(function (event) {
  var activeOldCity = event.target.className
   var currentCity = toTitleCase(activeOldCity);
  loadData(currentCity);});

  
  /*This function capitalizes any string sent to it.  I've used it to make sure the cities
  are capitalized before they are processed and other places as well. It was directly copied from 
  https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html */
  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});}


/* This function pulls the city's forecast data from localStorage and populates
it to the html and calls the function to get the current weather.  If it can't 
find data for the city, it forwards it to getForecast to create new forecast 
weather.*/
function loadData(city) {
  if (!localStorage.getItem(city)){
    getForecast(city);
    getWeather(city);}
  var data = JSON.parse(localStorage.getItem(city))
  data = data.city;
  for (var i = 0; i < 5; i++) {
    var weather = data[i];
    date2[i].text(weather[0]);
    icon2[i].attr("src", weather[1]);
    temp2[i].text(weather[2]);
    wind2[i].text(weather[3]);
    humid2[i].text(weather[4]);
    getWeather(city);};}



/*This is the function that pulls the weather from the weather API.  Since the variables created in it
are limited to the function, it also populates the html elements from here.*/
async function getWeather(city) {
  queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
  fetch(queryUrl)
    .then(function (response) {
      if (!response.ok) {
        alert("I am having problem connecting to the weather service.  Please push the button again later.")
      throw response.json();}
      return response.json();})
    .then(function (weatherData) {
      datejs = (dayjs.unix(weatherData.dt).format('MMM D, YYYY'));
      dateCity = city + " -- " + datejs
      this.cityDate.text(dateCity);
      forStorage[0] = dateCity;
      imageIcon = 'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
      this.bImage.attr('src', imageIcon);
      forStorage[1] = imageIcon;
      var weatherTemp = weatherData.main.temp;
      var displayTemp = Math.round((weatherTemp - 273.15) * 9 / 5 + 32) + "°F";
      forStorage[2] = displayTemp
      this.bTemp.text(displayTemp);
      var weatherWind = weatherData.wind.speed
      var displayWind = Math.round(weatherWind * 2.237) + "MPH"
      forStorage[3] = displayWind;
      this.bWind.text(displayWind);
      var weatherhumid = weatherData.main.humidity
      var displayHumid = weatherhumid + "%"
      this.bHumid.text(displayHumid)
      forStorage[4] = displayHumid;
      saveStorage = {
        weather: [forStorage[0], forStorage[1], forStorage[3], forStorage[4], forStorage[5]]}
      localStorage.setItem((city + '0'), JSON.stringify(saveStorage));})};

/* this function does a similar job as getWeather() but it gets pulls from the API to get all five
days of the forcast.  Again, since the variables are suck to this function due to scoping, setting
the html elemsnts is also done from this function and the data is saved in localStorage*/
async function getForecast(city) {
  queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=c678bf4ba5b2185e3326c14c3b82bf12'
  fetch(queryUrl)
    .then(function (response) {
      if (!response.ok) {
      throw response.json();}
      return response.json();})
    .then(function (weatherData) {
      for (var i = 5; i < 38; i += 8) {
        datejs = (dayjs.unix(weatherData.list[i].dt).format('MMM D, YYYY'));
        this.date[i].text(datejs);
        forStorage[i] = datejs;
        imageIcon = 'https://openweathermap.org/img/wn/' + weatherData.list[i].weather[0].icon + '@2x.png';
        image[i].attr('src', imageIcon);
        forStorage[i + 1] = imageIcon
        var weatherTemp = weatherData.list[i].main.temp;
        var displayTemp = Math.round((weatherTemp - 273.15) * 9 / 5 + 32) + "°F";
        forStorage[i + 2] = displayTemp
        this.temp[i].text(displayTemp);
        var weatherWind = weatherData.list[i].wind.speed
        var displayWind = Math.round(weatherWind * 2.237) + "MPH"
        forStorage[i + 3] = displayWind;
        this.wind[i].text(displayWind);
        var weatherhumid = weatherData.list[i].main.humidity
        var displayHumid = weatherhumid + "%"
        humid[i].text(displayHumid)
        forStorage[i + 4] = displayHumid;}
      saveStorage = {
        city: [[forStorage[5], forStorage[6], forStorage[7], forStorage[8], forStorage[9]],
        [forStorage[13], forStorage[14], forStorage[15], forStorage[16], forStorage[17]],
        [forStorage[21], forStorage[22], forStorage[23], forStorage[24], forStorage[25]],
        [forStorage[29], forStorage[30], forStorage[31], forStorage[32], forStorage[33]],
        [forStorage[37], forStorage[38], forStorage[39], forStorage[40], forStorage[41]]]};
      localStorage.setItem((city), JSON.stringify(saveStorage));})};


/*This is the eventhandler for the submit button which initiates several other 
functions via the handleSubmit function*/
submit.on("click", handleSubmit);