// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city 

var APIKey = "1904041cee75c3e94b83f0b1f917e11c";
var cityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".submit");

var getCityData = function () {
    var cityName = cityInput.value.trim(); // Gets user entered city name and trim method removes whitespace from both sides of a string.
    if (!cityName) return; //return if cityName is empty
    console.log(cityName);

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value.trim() + "&appid=" + APIKey + "&units=metric";

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            displayWeather(data)
            getWeatherDetails(data.coord.lat, data.coord.lon)
        })
}
//localStorage.setItem("cityData", JSON.stringify(data)); // want data to be stored in local storage
var displayWeather = function (weatherObject) {
    console.log(weatherObject)
    var { main, weather, name, wind, coord } = weatherObject
    var title = $("<h3>").text(name)
    var tempEl = $("<h4>").text(main.temp)
    var icon = $("<img>").attr("src", `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`)
    $("#current-weather").append(title.append(icon), tempEl)
    getWeatherDetails(coord.lat, coord.lon)
}
var getWeatherDetails = function (lat, lon) {
    var forecastApi = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey; // need lattitude and longitude to be entered into URL from console.log(data)
    fetch(forecastApi).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        for (var i = 0; i < data.list.length; i++) {
            console.log(data.list[i])
            var targetTime = data.list[i].dt_txt.split(" ")[1]
            console.log(targetTime) // make if statment to take 40 cards and turn into 5
        }
    })
}

searchButton.addEventListener("click", getCityData);