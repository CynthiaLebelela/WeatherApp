//Update weather information on the right-side & it  also correct the the use of lower and uppercase in a word
function updateWeatherInfo(response){
    let tempEle = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
     let cityEle = document.querySelector("#city");
    cityEle.innerHTML = response.data.city;
    tempEle.innerHTML = Math.round(temperature);
}

//Make API call and updatethe user interface
function searchCity(city){
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(updateWeatherInfo);
}

//Changes the h1 based on search-input
function changeH1(event){
    event.preventDefault();
    let searchSpace = document.querySelector("#search-input");

    searchCity(searchSpace.value);
}
//Call the h1 changes function
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeH1);

//search city by current location
//searchCity();