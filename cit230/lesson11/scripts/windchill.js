const apiWeatherURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=53a5c2262e61461f5b32ca79e2002ed1&units=imperial'

fetch(apiWeatherURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //debugging console.log
            // console.log(currentWeather.main.temp);

            let currentTemp = currentWeather.main.temp;
            let tempHigh = currentWeather.main.temp_max;
            let windSpeed = currentWeather.wind.speed;
            let windChill = 0;

            if (currentTemp <= 50 && windSpeed > 3) {
                windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + .4275 * currentTemp * Math.pow(windSpeed, .16);
            }

            document.getElementById("currentTemp").innerHTML = currentTemp + "&deg;";
            document.getElementById("tempHigh").innerHTML = tempHigh + "&deg;";
            document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
            document.getElementById("windChill").innerHTML = windChill;

            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = "N/A";
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg;";
            }

        });