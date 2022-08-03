window.addEventListener("load", () => {
  const contentItems = document.querySelectorAll(".content-item");
  const nextStepBtns = document.querySelectorAll(".nextStepBtn");
  const stepsUl = document.querySelector(".steps").children[0];
  const stepLine = document.querySelector(".step-line");
  let maxStepCount = stepsUl.children.length;
  let index = 0;
  let value = 0;

  for (const nextStepBtn of nextStepBtns) {
    nextStepBtn.addEventListener("click", () => {
      if (index < maxStepCount - 1) {
        index++;
        value += 100 / maxStepCount;
        stepLine.style.width = `${value}%`;
        stepsUl.children[index].classList.add("active-step");

        for (const contentItem of contentItems) {
          contentItem.style.transform = `translateX(-${100 * index}%)`;
          contentItem.style.transition = "all .5s";
        }
      } else {
        index = 0;
        value = 0;

        stepLine.style.width = `${value}%`;

        [...stepsUl.children].forEach((element, _index) => {
          index !== _index && element.classList.remove("active-step");
        });

        for (const contentItem of contentItems) {
          contentItem.style.transform = `translateX(0%)`;
          contentItem.style.transition = "all .5s";
        }
      }
    });
  }
});
