
let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let currDiv = document.getElementById("weather-info");
    var ourRequest = new XMLHttpRequest();
    let cityName = document.getElementById("cityInput").value;
    const APIKey = "7e69a02ec586e77565049ebea696cc4a";
    ourRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`);
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        getCityWeather(ourData);
    
        let btn = document.getElementById("btn");
        let input = document.getElementById("cityInput");
        let weatherInfo = document.getElementById("weather-info");
    
        btn.addEventListener("click", function() {
            getCity(ourData);
        });
        function getCityWeather (data) {
            if (cityName === "") {
                alert("Field is empty.");
                return;
            }
        
            else {

                let tempC = data.main.temp - 273;
                let degrees = "\u00B0";

                let weatherInfo = document.createElement("p");
                weatherInfo.innerHTML = `The weather in ${cityName} is ${data.weather[0].main}. <br> The temperature is ${tempC.toFixed(2)} ${degrees}C with a wind speed of ${data.wind.speed} m/s`;
                currDiv.appendChild(weatherInfo);


    
    
        
            }
        }
        
    };
    ourRequest.send();

})


