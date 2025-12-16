function handleSearchSubmit(event) {
  event.preventDefault();
  searchInput = document.querySelector("#search-form-input");
  cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
