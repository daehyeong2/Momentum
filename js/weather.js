const API_KEY = "3b40d96bdcb220607a623e1bd416499e";
const loading = document.getElementById("loading");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json()
        .then(data => {
            const weather__info = document.getElementById("weather__info");
            const icon = document.getElementById("icon");
            const city = document.getElementById("city");
            const temp = document.getElementById("temp");
            loading.remove();

            weather__info.classList.add("box");
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            city.innerText = data.name;
            temp.innerText = `${data.main.temp}°C`;
        }));
}
function onGeoError(){
    const errorMessage = document.querySelector("#error span");
    const error = document.createElement("i");
    error.className = "fa-solid fa-triangle-exclamation";
    loading.remove();

    errorMessage.innerText = "Unable to load weather";

    errorMessage.parentElement.append(error);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);