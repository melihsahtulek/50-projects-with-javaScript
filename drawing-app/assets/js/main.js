window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const decrease = document.querySelector(".decrease");
  const increase = document.querySelector(".increase");
  const brushSize = document.querySelector(".brush-size");
  const colorInp = document.querySelector(".color-inp");
  const reset = document.querySelector(".reset");
  const ctx = canvas.getContext("2d");

  let drawObj = {
    drawing: false,
    color: "#000000",
    brushSize: 10,
    prevX: 0,
    prevY: 0,
  };

  canvas.addEventListener("mousedown", (e) => {
    console.log("MouseDown!");
    drawObj.drawing = true;
    drawObj.prevX = e.offsetX;
    drawObj.prevY = e.offsetY;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (drawObj.drawing) {
      console.log("MouseMove");
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, drawObj.brushSize, 0, Math.PI * 2);
      ctx.fillStyle = drawObj.color;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(drawObj.prevX, drawObj.prevY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.strokeStyle = drawObj.color;
      ctx.lineWidth = drawObj.brushSize * 2;
      ctx.lineCap = "round";
      ctx.stroke();

      drawObj.prevX = e.offsetX;
      drawObj.prevY = e.offsetY;
    }
  });

  canvas.addEventListener("mouseup", (e) => {
    console.log("MouseUp!");
    drawObj.drawing = false;
  });

  colorInp.addEventListener("change", (e) => (drawObj.color = e.target.value));

  decrease.addEventListener("click", (e) => {
    if (drawObj.brushSize > 5) {
      drawObj.brushSize = drawObj.brushSize - 5;
      setBrushSize();
    }
  });
  increase.addEventListener("click", (e) => {
    if (drawObj.brushSize < 25) {
      drawObj.brushSize = drawObj.brushSize + 5;
      setBrushSize();
    }
  });

  const setBrushSize = () => (brushSize.textContent = drawObj.brushSize);

  reset.addEventListener("click", (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  setBrushSize();
});
