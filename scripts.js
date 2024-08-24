//Changes the h1 based on search-input
function changeH1(event){
    event.preventDefault();
    let searchSpace = document.querySelector("#search-input");
    console.log(searchSpace.value);

    let cityEle = document.querySelector("#city");
    cityEle.innerHTML = searchSpace.value;
}
//Call the h1 changes function
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeH1);