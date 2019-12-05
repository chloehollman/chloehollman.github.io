// for (i = 1; i < 6; i++) {
//     if ([currentDate.getDay() + (i - 1)] <= 6) {
//       document.getElementById(`day${i}`).innerHTML =
//         daysOfWeek[currentDate.getDay() + (i - 1)];
//     } else {
//       document.getElementById(`day${i}`).innerHTML =
//         daysOfWeek[currentDate.getDay() + (i - 1) - 7];
//     }
//   }  

//API URL
function getFiveDayForecast(cityId) {
    const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' +
        cityId + '&appid=53a5c2262e61461f5b32ca79e2002ed1&units=imperial';

    //comment out the API when designing

    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )
        .then(
            (forecasts) => {

                let hourString = '18:00:00';
                let counter = 1;


                forecasts.list.forEach(
                    (forecast) => {
                        if (forecast.dt_txt.includes(hourString)) {

                            const element = document.getElementById(`temp${counter}`);
                            element.innerHTML = forecast.main.temp + '&deg;';

                            // add day of week
                            let nextDate = new Date(forecast.dt_txt.replace(' ', 'T'));

                            const dayElement = document.getElementById(`day${counter}`);
                            dayElement.innerHTML = daysOfWeek[nextDate.getDay()];

                            //increment variables
                            counter += 1;
                        }
                    }
                )
            }
        );
}

function getDateString(date) {
    let dateString =
        //get full year
        date.getFullYear() + '-' +

        //get month
        (date.getMonth() + 1) + '-' +

        //get day
        date.getDate();

    return dateString;
}