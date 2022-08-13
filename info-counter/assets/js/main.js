window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".box");

  let n = 0;
  boxes.forEach((box, index) => {
    let timer = setInterval(() => {
      if (parseInt(box.children[0].getAttribute("data-value")) >= n) {
        n += 10;
        box.children[0].textContent = n;
      } else {
        box.children[0].textContent = box.children[0].getAttribute("data-value");
        clearInterval(timer);
      }
    }, 100);
  });
});
