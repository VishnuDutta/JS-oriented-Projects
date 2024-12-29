window.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("New");
  let tab = document.getElementById("generationTab");
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "57e03e9dd3mshc6787869786c601p1ce298jsne0e4e84698dc",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
    },
  };

  //   let fetchData = () => {
  //     fetch(url, options)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new error(`HTTP ERROR ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         tab.textContent = data.content;
  //       })
  //       .catch((error) => {
  //         tab.textContent = error.message;
  //         tab.style.backgroundColor = "red";
  //       });
  //   };

  let fetchData = async () => {
    try {
      tab.style.backgroundColor = ""
      let response = await fetch(url, options);
      if (!response.ok) {
        throw new error(`HTTP ERROR ${response.status}`);
      }
      let data = await response.json();
      tab.textContent = data.content;
    } catch (error) {
      tab.textContent = error.message;
      tab.style.backgroundColor = "red";
    }
  };

  button.addEventListener("click", () => {
    fetchData();
  });
});
