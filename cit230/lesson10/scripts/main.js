var currentDate = new Date();
var currentDateString;
//get day of week
var weekDayNumber = currentDate.getDay();


var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString += currentDate.getDate();

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += ' ' + month;

currentDateString += ' ' + currentDate.getFullYear();
document.getElementById('currentDate').innerHTML = currentDateString
//DEBUG
console.log(currentDateString);

//create the five-day forecast

let currentDay = weekDayNumber;

for (let i = 1; i<6; i++) {
    //add one day to current day
    currentDay++;

    //if current day is greater than 6 (Saturday), rest it to 0 (Sunday)
    if (currentDay > 6){
        currentDay = 0;
    }

    //assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);
    // const element = document.getElementById('day'+i);

    element.innerHTML = daysOfWeek[currentDay];
}

//show hide pancake
if (weekDayNumber === 5){
    document.getElementById("pancake").removeAttribute("class","hidden");
}

//----------------hamburger menu--------------------------//
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


const apiForecastURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=53a5c2262e61461f5b32ca79e2002ed1&units=imperial';

//comment out the API when designing

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecast) => {
            console.log(forecast);

            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1 );

            forecast.list.forEach(
                (forecast) => {
                    let currentDate =
                    //get full year
                    currentDate.getFullYear()+ '-' +

                    //get month
                    (currentDate.getMonth()+1) + '-' +

                    //get day
                    currentDate.getDate();

                let hourString = '18:00:00';

                    //debug
                    console.log(dateString);

                    //loop through results
                    forecasts.list.forEach(
                        (forecast) => {
                            if(forecast.dt_text.includes(dayeString)&&
                            forecast.dt_text.indlues(hourstring));
                        }
                    )
                }
            );
        }
    )