const heavyTaskBtn = document.querySelector(".without-worker .heavyTask-btn");
const lightTaskBtn = document.querySelector(".without-worker .lightTask-btn");
const containerEl = document.querySelector(".without-worker");

heavyTaskBtn.addEventListener("click", () => {
  let num = 0;
  for (let i = 1; i < 5_000_000_000; i++) {
    num += i;
  }
  alert(num);
});

lightTaskBtn.addEventListener("click", () => {
  containerEl.classList.toggle("brown");
});
