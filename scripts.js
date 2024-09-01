

//Update weather information on the right-side & it  also correct the the use of lower and uppercase in a word
function updateWeatherInfo(response){
    let tempEle = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityEle = document.querySelector("#city");
    let descriptionEle = document.querySelector("#description");
    let humidityEle = document.querySelector("#humidity");
    let windEle = document.querySelector("#wind-speed");
    let dateTimeEle = document.querySelector("#datetime");
    let date = new Date(response.data.time * 1000);
    let iconEle = document.querySelector("#icon");
    
    
    iconEle.innerHTML = ` <img src="${response.data.condition.icon_url}" class="weather-app-icon" style" width="80px;"/> `
     console.log(response.data.wind.speed);
    cityEle.innerHTML = response.data.city;
    descriptionEle.innerHTML = response.data.condition.description;
    humidityEle.innerHTML = `${response.data.temperature.humidity}%`;
    windEle.innerHTML = `${response.data.wind.speed}km/h`;
    dateTimeEle.innerHTML = formatDate(date);
    tempEle.innerHTML = Math.round(temperature);
}

//Make API call and updatethe user interface
function searchCity(city){
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(updateWeatherInfo);
}

//format date and time
function  formatDate(date){
   let hour = date.getHours();
   let minutes = date.getMinutes();
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[date.getDay()];

   if (minutes < 10){
    minutes = `0${minutes}`;
   }
   return `${day} ${hour}:${minutes}`;
}

//Changes the h1 based on search-input
function changeH1(event){
    event.preventDefault();
    let searchSpace = document.querySelector("#search-input");

    searchCity(searchSpace.value);
}
/*
function displayForecast(){
    let forecastElement = document.querySelector("#forecast");
    let days =["Mon","Tue","Wen","Thu","Fri","Sat","Sun"];
    let forecastHtml = "";
    days.forEach(function(day){
    forecastHtml  = forecastHtml + `
     <div class="row">
                    <div class="col-md-2 text-center mb-4">
                        <h5>${day}</h5>
                        <i class="fas fa-calendar fa-2x"></i> 
                        <p class="mt-2"><strong>12&deg; 9&deg;</strong></p>
                    </div>
                    </div>
                    `;
    });
    
    forecastElement.innerHTML = forecastHtml;
}
*/
//Call the h1 changes function
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeH1);

//To-Do List
//search city by current location 
searchCity("Pretoria");
//Make the first letter a capital letter on the description
//displayForecast();