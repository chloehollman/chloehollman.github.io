const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


  fetch(requestURL)
    .then(response => {
        response.json()
        .then(
            response => {
               const towns = response.towns;
               
               towns.forEach(
                (town,index)=> {
                    if (town.name.toLowerCase() === 'fish haven'){
                        //Fish Haven
                        document.querySelector('#fishHavenYearFounded')
                            .textContent = town.yearFounded;
                            
                        document.querySelector("#fishHavenMotto")
                            .textContent = town.motto;

                        document.querySelector("#fishHavenPop")
                            .textContent = town.currentPopulation;

                        document.querySelector("#fishHavenRain")
                            .textContent = town.averageRainfall;


                        document.querySelector('#fishHavenImage')
                        .setAttribute('src', 'images/' + town.photo);

                    } else if (town.name.toLowerCase() === 'preston') {
                        //Preston
                        document.querySelector('#prestonYearFounded')
                            .textContent = town.yearFounded;

                        document.querySelector("#prestonMotto")
                            .textContent = town.motto;

                        document.querySelector("#prestonPop")
                            .textContent = town.currentPopulation;

                        document.querySelector("#prestonRain")
                            .textContent = town.averageRainfall;

                        // document.querySelector("#prestonImage")
                        //     .setAttribute('src', 'images/' + town.photo);
                    
                        } else if (town.name.toLowerCase() === 'soda springs'){
                    //soda springs
                        document.querySelector('#sodaSpringsYearFounded')
                        .textContent = town.yearFounded;

                        document.querySelector("#sodaSpringsMotto")
                        .textContent = town.motto;

                        document.querySelector("#sodaSpringsPop")
                        .textContent = town.currentPopulation;

                        document.querySelector("#sodaSpringsRain")
                        .textContent = town.averageRainfall;

                        document.querySelector("#sodaSpringsImage")
                        .setAttribute('src', 'images/' + town.photo);

                    
                    }
                }
            );
        }
    )
});

