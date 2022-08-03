window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");

  for (const card of cards) {
    card.addEventListener("click", () => {
      for (const card of cards) {
        card.classList.remove("active");
      }
      !card.classList.contains("active") && card.classList.add("active");
    });
  }
});
