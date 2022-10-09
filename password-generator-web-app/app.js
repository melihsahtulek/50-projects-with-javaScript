window.addEventListener("load", function () {
  const genBtn = document.querySelector("#genBtn");
  const resultInp = document.querySelector("#resultInp");
  const len = document.querySelector("#len");
  let result = "";
  const copyBtn = document.querySelector("#copyBtn");

  genBtn.addEventListener("click", () => {
    if (parseInt(len.value) >= len.getAttribute("min") && parseInt(len.value) <= len.getAttribute("max")) {
      result = "";
      resultInp.value = "";

      for (let i = 0; i < parseInt(len.value); i++) {
        Array.from(document.getElementsByTagName("input")).forEach((input) => {
          if (input.getAttribute("type") === "checkbox") {
            if (input.checked && result.length < parseInt(len.value)) {
              if (input.getAttribute("name") === "special_characters") {
                generateSpecialCharacters();
              }
              if (input.getAttribute("name") === "numbers") {
                generateNumbers();
              }
              if (input.getAttribute("name") === "lower_cases") {
                generateLowerCases();
              }
              if (input.getAttribute("name") === "upper_cases") {
                generateUpperCases();
              }
            }
          }
        });
      }

      if (result !== null) {
        resultInp.value = result;
      }
    } else {
      alert("min - max error");
    }
  });

  const generateRandomNumber = (min, max) => {
    let n = 0;
    while (true) {
      n = Math.floor(Math.random() * 100);
      if (n <= max && n >= min) {
        break;
      }
    }
    return n;
  };

  const stringToAscii = (number) => {
    return String.fromCharCode(number);
  };

  const generateSpecialCharacters = () => {
    result += stringToAscii(generateRandomNumber(33, 46));
  };

  const generateNumbers = () => {
    result += stringToAscii(generateRandomNumber(48, 57));
  };

  const generateLowerCases = () => {
    result += stringToAscii(generateRandomNumber(97, 122));
  };

  const generateUpperCases = () => {
    result += stringToAscii(generateRandomNumber(65, 90));
  };

  copyBtn.addEventListener("click", () => {
    resultInp.select();
    document.execCommand("copy");
  });
});
