window.addEventListener("load", () => {
  const container = document.querySelector("#container");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    const notification = document.createElement("div");
    notification.textContent = `notification ${parseInt(Math.random() * 100)}`;
    notification.classList.add("notification");
    const notificationList = document.querySelectorAll(".notification");
    notification.style.bottom = `${notificationList.length * 70 + 10}px`;
    container.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  });
});
