window.addEventListener("load", () => {
  const menuCheckbox = document.querySelector("#menu-checkbox");
  const menuItems = document.querySelector(".menu-items");
  const content = document.querySelector(".content");

  menuCheckbox.addEventListener("change", (e) => {
    menuItems.classList.toggle("menu-show");
    content.classList.toggle("translate-content");
  });
});
