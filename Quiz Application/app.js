window.addEventListener("DOMContentLoaded", () => {
  let marks = 0;
  let questionCounterDisplay = 0;
  const questionDisplayTotal = document.getElementsByClassName("mainmatter");
  const questions = document.getElementsByClassName("question");
  const options = document.getElementsByClassName("optionsq1");
  const totalMarksDisplay = document.getElementsByClassName("totalMarks")[0];
  const marksToDisplay = document.getElementById("marksToDisplay");

  questionDisplay();

  for (option of options) {
    option.addEventListener("click", (e) => {
      mainRender(e);
    });
  }

  //   All Functions

  function mainRender(e) {
    
    if (e.target.textContent === "delhi") {
      marks++;
    } else if (e.target.textContent === "Peacock") {
      marks++;
    } else if (e.target.textContent === "Haryana") {
      marks++;
    } else if (e.target.textContent === "Modi") {
      marks++;
    } else if (e.target.textContent === "Mom") {
      marks++;
    }

    questionCounterDisplay++;

    questionDisplay();
  }

  function mainResult() {
    totalMarksDisplay.style.display = "block";
    marksToDisplay.textContent = marks;
    questionDisplayTotal[questionCounterDisplay - 1].style.display = "none";
  }

  function questionDisplay() {
    if (questionCounterDisplay >= questionDisplayTotal.length) {
      mainResult();
    } else {
      for (questionDisplayone of questionDisplayTotal) {
        questionDisplayone.style.display = "none";
      }
      questionDisplayTotal[questionCounterDisplay].style.display = "flex";
    }
  }
});
