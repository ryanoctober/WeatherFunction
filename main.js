let weather = document.getElementById('weather-el');

const getWeather = (country, WeatherType) => {
     console.log(`The weather in ${country} is ${WeatherType}`);
}

const weatherInfo = () => {
    getWeather("Scotland", "sunny");
    getWeather("England", "raining");
    getWeather("Spain", "hot");
    getWeather("Portugal", "warm");
}

weatherInfo();