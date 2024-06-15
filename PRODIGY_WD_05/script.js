const API_key = "58c6ff5c1ca72189d19560268cb40aca";

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        checkWeather(city);
    } else {
        alert('Please enter a city');
    }
});

async function checkWeather(city) {
    const API_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`;
    const response = await fetch(API_url);
    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    const weatherIcon = document.querySelector(".weather-icon");
    const weatherCondition = data.weather[0].main;
    console.log(`Weather condition: ${weatherCondition}`);

    if(weatherCondition === "Clouds"){
        weatherIcon.src = "assets/clouds.png";
    }
    else if(weatherCondition === "Clear"){
        weatherIcon.src = "assets/clear.png";
    }
    else if(weatherCondition === "Rain"){
        weatherIcon.src = "assets/rain.png";
    }
    else if(weatherCondition === "Drizzle"){
        weatherIcon.src = "assets/drizzle.png";
    }
    else if(weatherCondition === "Mist" || weatherCondition == "Haze"){
        weatherIcon.src = "assets/mist.png";
    }
    else if(weatherCondition == "Snow"){
        weatherIcon.src = "assets/snow.png";
    }
    else {
        weatherIcon.src = "";
        console.log("No matching icon for the weather condition");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}