window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  const resultBoxes = document.querySelector(".result-boxes");
  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    let { key, keyCode, code } = e;
    title.style.display = "none";
    resultBoxes.innerHTML = `
      <div class="box">
        <h4>event.key</h4>
        <h3>${key === " " ? "Space" : key}</h3>
      </div>
      <div class="box">
        <h4>event.keyCode</h4>
        <h3>${keyCode}</h3>
      </div>
      <div class="box">
        <h4>event.code</h4>
        <h3>${code}</h3>
      </div>
    `;
  });
});
