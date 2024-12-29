document.addEventListener("DOMContentLoaded", () => {
  let currentInput = "";
  let first_operand;
  let operator;

  let btns = document.querySelectorAll("button");
  let screen = document.getElementsByClassName("display")[0];

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const val = e.target.innerText;
      // currentInput += val;
      if (["/", "X", "+", "-"].includes(val)) {
        display_screen(val);
        first_operand = parseFloat(currentInput);
        operator = val;
        currentInput = "";
      } else if (val === "=") {
        if (isNaN(first_operand)) {
          display_screen("Error");
          return;
        }
        second_operand = currentInput;
        result = CalculateResult(first_operand , second_operand , operator);
        display_screen(result);
        currentInput = "";
      }else{
        currentInput +=val;
        display_screen(currentInput);
      }
    });
  });

  function display_screen(value) {
    screen.innerHTML = value;
  }

  function CalculateResult(first_operand , second_operand , operator){
    let first__operand = parseFloat(first_operand);
    let second__operand= parseFloat(second_operand);
    switch (operator) {
        case "+":
          return first__operand + second__operand;
          break;
        case "-":
          return first__operand - second__operand;
          break;
        case "X":
          return first__operand * second__operand;
          break;
        case "/":
          return first__operand / second__operand;
          break;
        default:
            return "Error";
      }
  }
});
