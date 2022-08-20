window.addEventListener("load", () => {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const date = new Date();
  date.setDate(1);
  date.setMonth(0);
  date.setFullYear(2023);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  setInterval(() => {
    const t = new Date(date.getTime() - new Date().getTime());

    let d = Math.floor(t / (1000 * 60 * 60 * 24));
    let h = Math.floor(t / (1000 * 60 * 60));
    let m = Math.floor(t / (1000 * 60));
    let s = Math.floor(t / 1000);

    days.textContent = d;
    hours.textContent = h - d * 24;
    minutes.textContent = m - h * 60;
    seconds.textContent = s - m * 60;
  }, 1000);
});
