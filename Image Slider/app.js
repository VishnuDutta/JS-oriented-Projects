window.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementById("dots");
  let previous = document.getElementsByClassName("prev")[0];
  let next = document.getElementsByClassName("next")[0];

  for (let i = 0; i < slides.length; i++) {
    createDots();
  }

  showslides(slideIndex);

  //add Event Listeners

  previous.addEventListener("click", () => {
    slideIndex--;
    showslides(slideIndex);
  });

  next.addEventListener("click", () => {
    slideIndex++;
    showslides(slideIndex);
  });

  // functions
  function showslides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    dotsActivity();
  }

  function createDots() {
    const spany = document.createElement("span");
    spany.className = "dot";
    dots.appendChild(spany);
  }

    function dotsActivity() {
      let totaldots = document.getElementsByClassName("dot");
      for (i = 0; i < totaldots.length; i++) {
        // totaldots[i].className = totaldots[i].className.replace(" active", "");
        totaldots[i].classList.remove("active");
      }
      totaldots[slideIndex - 1].className += " active";
    }

    // setInterval(() => {
    //     slideIndex++;
    //     showslides(slideIndex);
    // }, 3000);
});
