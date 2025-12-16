function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperature = response.data.temperature.current;
  cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  apiKey = "04be30ebbbe0f71eoaba8f379747a4t7";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria");
