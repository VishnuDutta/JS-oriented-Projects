document.addEventListener("DOMContentLoaded", () => {
  let intervalId = null;
  let isPaused = false;
  let overall_seconds = 0;

  let input_Hours = document.getElementById("input_Hours");
  let input_Min = document.getElementById("input_Min");
  let input_Sec = document.getElementById("input_Sec");
  let hours_Span = document.getElementById("hours_Span");
  let Min_Span = document.getElementById("Min_Span");
  let sec_Span = document.getElementById("sec_Span");
  let set_Timer_Btn = document.getElementById("btn_To_Set");
  let hours_Display = document.getElementsByClassName("hours_Display");
  let minutes_Display = document.getElementsByClassName("Minutes_Display");
  let seconds_Display = document.getElementsByClassName("Seconds_Display");
  let start_Timer_btn = document.getElementById("start_Timer");
  let pause_Timer_btn = document.getElementById("pause_Timer");
  let reset_Timer_btn = document.getElementById("reset_Timer");
  let All_inputs = document.querySelectorAll(".input");

  function update_Span(span, input) {
    span.innerHTML = input.value;
  }

    update_Span(hours_Span, input_Hours);
    update_Span(Min_Span, input_Min);
    update_Span(sec_Span, input_Sec);

  All_inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.id == "input_Hours") {
        hours_Span.innerHTML = e.target.value;
      }

      if (e.target.id == "input_Min") {
        Min_Span.innerHTML = e.target.value;
      }

      if (e.target.id == "input_Sec") {
        sec_Span.innerHTML = e.target.value;
      }
    });
  });

  set_Timer_Btn.addEventListener("click", () => {
    overall_seconds =
      parseInt(input_Hours.value) * 3600 +
      parseInt(input_Min.value) * 60 +
      parseInt(input_Sec.value);
    display_to_screen(overall_seconds);
  });

  function display_to_screen(total_seconds) {
    let hours = Math.floor(total_seconds / 3600)
      .toString()
      .padStart(2, "0");
    total_seconds = total_seconds % 3600;
    let min = Math.floor(total_seconds / 60)
      .toString()
      .padStart(2, "0");
    let sec = (total_seconds % 60).toString().padStart(2, "0");

    hours_Display[0].innerHTML = hours;
    minutes_Display[0].innerHTML = min;
    seconds_Display[0].innerHTML = sec;
  }

  function start_Timer_funct() {
    intervalId = setInterval(() => {
      if (overall_seconds > 0) {
        overall_seconds -= 1;
        display_to_screen(overall_seconds);
      } else {
        clearInterval(intervalId);
        intervalId = null;
      }
    }, 1000);
  }

  function pause_Timer_func() {
    if (isPaused) {
        start_Timer_funct();
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
    isPaused = !isPaused;
  }

  reset_Timer_btn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    overall_seconds = 0;
    isPaused = false;
    hours_Display[0].innerHTML = "HH";
    minutes_Display[0].innerHTML = "MM";
    seconds_Display[0].innerHTML = "SS";
  });

  pause_Timer_btn.addEventListener("click", () => {
    pause_Timer_func();
  });

  start_Timer_btn.addEventListener("click", () => {
    if (intervalId === null) {
      start_Timer_funct();
    } else {
      console.log("Timer is already running");
    }
  });
});
