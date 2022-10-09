window.addEventListener("load", (e) => {
  const generateBtn = document.querySelector("#generateBtn");
  const resultTitle = document.querySelector("#result");
  document.body.style.background = "#f7f7f7";
  resultTitle.innerHTML = "#f7f7f7";

  generateBtn.addEventListener("click", () => {
    let result = "";
    while (true) {
      if (result.length == 6) {
        document.body.style.background = "#" + result;
        resultTitle.innerHTML = "#" + result;
        break;
      } else {
        let n = Math.floor(Math.random() * 100);
        if (n >= 0 && n < 10) {
          result += n;
        } else {
          if (n >= 65 && n <= 70) {
            result += String.fromCharCode(n);
          }
        }
      }
    }
  });
});
