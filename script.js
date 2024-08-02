// weather api 
const apiKey = "5345cd194d9e818792b6647e6d10ec52";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // city invalid message
  if(response.status == 404 ){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
    
  }
  else{
    
    //api data in text
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  const humidity = (document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%");
  const wind = (document.querySelector(".wind").innerHTML =
    data.wind.speed + " Km/h");

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";

  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  // weather information value  button click on visible class
  const display = document.querySelector(".weather");
  display.style.display = "block";

  document.querySelector(".error").style.display = "none";
  }


}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);

});
