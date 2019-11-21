const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=53a5c2262e61461f5b32ca79e2002ed1&units=imperial';

//comment out the API when designing

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            console.log(currentWeather.main.temp);

            let currentTemp = currentWeather.main.temp;
            let currentImageIcon = currentWeather.weather[0].icon;
            let currentImage = 
                'https://openweathermap.org/img/w/' +
                currentImageIcon +
                '.png';

            document.querySelector('#current-temp').textContent = currentTemp;

            document.querySelector('#imagesrc').textContent = currentImage;

            document.querySelector('#weather-icon').setAttribute('src', currentImage);

            document.querySelector('#weather-icon').setAttribute('alt', currentWeather.weather[0].main);
        
        
        }
    );
