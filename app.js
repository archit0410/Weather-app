const button = document.getElementById("search-button");
const input = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const getAqi = document.getElementById("aqi");
const getHumidity = document.getElementById("humidity");
const getFeelsLike = document.getElementById("feelsLike");

async function getData(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=35157979dd694b85a90115723242903&q=${city}&aqi=yes`;
    const promise = await fetch(url);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const city = input.value;
    const result = await getData(city);
    console.log(result);
    cityName.innerText = "Location : "+result.location.name+" , "+result.location.country;
    temperature.innerText = "Current Tempreture : "+result.current.temp_c+"°C";
    getFeelsLike.innerText = "Feels Like : "+result.current.feelslike_c+"°C";
    getAqi.innerText = "PM 2.5 : "+result.current.air_quality.pm2_5;
    getHumidity.innerText = "Humidity : "+result.current.humidity+"%";
});
