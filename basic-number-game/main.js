window.addEventListener("load", () => {
  const numbers = [1, 10, 3, 2, 5, 4, 8, 6, 9, 7, 10, 7, 2, 1, 8, 9, 3, 4, 6, 5];
  const area = document.querySelectorAll("section")[0];
  const scoreResult = document.querySelectorAll(".score")[0];
  const newGameBtn = document.querySelector("#newGameBtn");
  let counter = 0;
  let selectedNumbers = [];
  let score = 0;

  Array.from(area.children).forEach((child, index) => {
    child.children[0].textContent = numbers[index];
    child.children[0].setAttribute("data-value", `${numbers[index]}`);
  });

  Array.from(area.children).forEach((button, index) => {
    button.addEventListener("click", () => {
      counter++;
      if (counter <= 2) {
        button.children[0].setAttribute("class", "active");
        selectedNumbers.push({ data: button.children[0].getAttribute("data-value"), index: index });
      }
      if (selectedNumbers.length === 2) {
        if (selectedNumbers[0].data === selectedNumbers[1].data) {
          selectedNumbers.forEach((n) => {
            area.children[n.index].setAttribute("class", "active");
          });
          score += 10;
          selectedNumbers = [];
          counter = 0;
        } else {
          setTimeout(() => {
            selectedNumbers.forEach((n) => {
              area.children[n.index].children[0].removeAttribute("class", "active");
            });
            selectedNumbers = [];
            counter = 0;
          }, 1000);
        }
      }
      scoreResult.textContent = `Your Score : ${score}`;

      if (score === 100) {
        newGameBtn.style.display = "block";
        newGameBtn.addEventListener("click", () => {
          window.location.reload();
          newGameBtn.style.display = "none";
        });
      }
    });
  });
});
