window.document.addEventListener("DOMContentLoaded", () => {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbersLetters = "1234567890";
  const specialCharacLetters = "!@#$%^&*()_+";
  const displayPassword = document.getElementById("displayPassword");
  const upperCase = document.getElementById("upperCase");
  const lowerCase = document.getElementById("lowerCase");
  const numbers = document.getElementById("numbers");
  const specialCharac = document.getElementById("specialCharac");
  const passwordLength = document.getElementById("passwordLength");
  const passLengthDisplay = document.getElementById("passLengthDisplay");

  //initialize Display
  updatePasswordLengthDisplay();
  generatePassword();

  // All EventListeners
  passwordLength.addEventListener("input", () => {
    updatePasswordLengthDisplay();
    generatePassword();
  });

  upperCase.addEventListener("input" , ()=>{
    updatePasswordLengthDisplay();
    generatePassword();
  })

  lowerCase.addEventListener("input" , ()=>{
    updatePasswordLengthDisplay();
    generatePassword();
  })

  numbers.addEventListener("input" , ()=>{
    updatePasswordLengthDisplay();
    generatePassword();
  })

  specialCharac.addEventListener("input" , ()=>{
    updatePasswordLengthDisplay();
    generatePassword();
  })

  // All Functions
  function updatePasswordLengthDisplay() {
    passLengthDisplay.textContent = passwordLength.value;
  }

  function generatePassword() {
    let selectedCharac = selectedCharachters();
    let password = createPassword(selectedCharac, passwordLength.value);
    displayPassword.value =
      password || "Please select at least one character type";
  }

  function selectedCharachters() {
    let characters = "";
    if (upperCase.checked) {
      characters += upperCaseLetters;
    }
    if (lowerCase.checked) {
      characters += lowerCaseLetters;
    }
    if (numbers.checked) {
      characters += numbersLetters;
    }
    if (specialCharac.checked) {
      characters += specialCharacLetters;
    }
    return characters;
  }
  function createPassword(characters, length) {
    if (!characters) return "";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
});
