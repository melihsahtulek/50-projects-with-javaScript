window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".animated-box");

  // TRANSLATE ALL ELEMENTS
  boxes.forEach((box, index) => {
    let documentW = document.body.clientWidth;
    let leftW = box.getBoundingClientRect().left;
    let boxW = box.offsetWidth;
    let dynamicW = documentW - leftW - boxW;
    if (index % 2 === 0) {
      box.style.transform = `translateX(${dynamicW + boxW}px)`;
      box.setAttribute("data-value", dynamicW + boxW);
    } else {
      box.style.transform = `translateX(-${leftW + boxW}px)`;
      box.setAttribute("data-value", (leftW + boxW) * -1);
    }
  });

  const showHide = () => {
    boxes.forEach((box) => {
      if (window.innerHeight > box.getBoundingClientRect().top + 100) {
        box.style.transform = "translateX(0)";
      } else {
        box.style.transform = `translateX(${box.getAttribute("data-value")}px)`;
      }
      box.style.transition = "all .25s";
    });
  };

  // SCROLL EVENT
  window.addEventListener("scroll", (e) => {
    showHide();
  });

  showHide();
});
