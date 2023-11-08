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
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&appid="+APIKey+"&units=metric";
var getCityData = function () {
    var cityName = cityInput.value.trim(); // Gets user entered city name and trim method removes whitespace from both sides of a string.
    if (!cityName) return; //return if cityName is empty
    console.log(cityName);
}

fetch(queryURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})



searchButton.addEventListener("click", getCityData);