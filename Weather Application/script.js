window.addEventListener("DOMContentLoaded", () => {
  const cityname = document.getElementById("cityName");
  const submitBtn = document.getElementById("submitBtn");
  const main = document.getElementById("main");
  const description = document.getElementById("description");
  const temperature = document.getElementById("temperature");
  const feels_like = document.getElementById("feels_like");
  const displayData = document.getElementsByClassName('displayData')[0];
  const displayError = document.getElementsByClassName('displayError')[0];

  //   event Listeners
  cityname.addEventListener('click' , resetDisplay);

  submitBtn.addEventListener("click", fetchData);

  window.addEventListener("keypress", (key) => {
    if (key.key === "Enter") {
      fetchData();
    }
  });

  //   Functions
  async function fetchData() {
    const apiKey = "13c66755c63a1bf2c25322fa4127b990";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apiKey}`;
    try {
      const raw_response = await fetch(url);
      if (!raw_response.ok) {
        throw new error(`response status : ${raw_response.status}`);
      }

      const data = await raw_response.json();
      displayProperties(data);
    } catch (error) {
      displayErrorscreen(error);
    }
    cityname.value = "";
  }

  function resetDisplay(){
    displayData.style.display = "flex";
    displayError.style.display = "none";
    main.textContent = "main - ";
    description.textContent = "description - ";
    temperature.textContent = "Temperature - ";
    feels_like.textContent = "feels_like - ";
    cityname.value = "";
  }

  function displayProperties(UseData){
    displayError.style.display = "none";
    main.textContent += UseData.weather[0].main;
    description.textContent += UseData.weather[0].description;
    temperature.textContent += UseData.main.temp;
    feels_like.textContent += UseData.main.feels_like;
  }

  function displayErrorscreen(){
    displayData.style.display = "none";
    displayError.style.display = "block";
    console.error("Error fetching data:", error);
  }
});
