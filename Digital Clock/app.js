window.addEventListener("DOMContentLoaded", () => {
  const hours = document.getElementsByClassName("hours")[0];
  const minutes = document.getElementsByClassName("Minutes")[0];
  const seconds = document.getElementsByClassName("Seconds")[0];
  const AMPM = document.getElementsByClassName("AMPM")[0];

  setInterval(() => {
    let data = new Date();

    hours.textContent = data.getHours() % 12 || 12;
    minutes.textContent = String(data.getMinutes()).padStart("2" , 0);
    seconds.textContent = String(data.getSeconds()).padStart("2" , 0);

    if(data.getHours()<12){
        // AM
        AMPM.textContent = "AM"
    }else{
        // PM
        AMPM.textContent = "PM"
    }

  }, 1000);
});
