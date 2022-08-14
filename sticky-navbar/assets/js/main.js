window.addEventListener("load", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    let scrollTopValue = this.scrollY;
    if (scrollTopValue >= 50) {
      header.classList.add("active-header");
    } else {
      header.classList.remove("active-header");
    }
  });
});
