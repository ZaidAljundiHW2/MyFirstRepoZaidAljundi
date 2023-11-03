var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://zaidaljundihw2.github.io/MyFirstRepoZaidAljundi/cities1.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    getCity(ourData);

    let btn = document.getElementById("btn");
    let input = document.getElementById("cityInput");
    let weatherInfo = document.getElementById("weather-info");

    btn.addEventListener("click", function() {
        getCity(ourData);
    });
    function getCity (data) {
        if (input.value === "") {
            alert("Field is empty.");
        }
    
        else {
    
            let cityName = input.value;
    
            for (let i = 0; i < data.length; i++) {
    
                if (cityName === data[i].name) {
                    let cityInfo = data[i];
                }
            }

            if (cityInfo !== null) {
                let infoDiv = document.createElement("div");
                infoDiv.innerHTML = "<h1>City Name: cityInfo.";
                weatherInfo.innerHTML = "";
                weatherInfo.appendChild(infoDiv);
            } 


    
        }
    }
    
};
ourRequest.send();

