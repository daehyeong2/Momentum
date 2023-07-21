const API_KEY = "3b40d96bdcb220607a623e1bd416499e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json()
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        }));
}
function onGeoError(){
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    const error = document.createElement("i");
    error.className = "fa-solid fa-triangle-exclamation";

    weather.innerText = "Unable to load weather";

    city.innerText = "";
    city.append(error);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);