const heavyTaskBtnWorker = document.querySelector(".with-worker .heavyTask-btn");
const lightTaskBtnWorker = document.querySelector(".with-worker .lightTask-btn");
const containerElWorker = document.querySelector(".with-worker");

if (window.Worker) {
  const worker = new Worker("./worker.js");

  heavyTaskBtnWorker.addEventListener("click", () => {
    worker.postMessage("NUMBER");
    console.log("Message posted to worker");
  });

  worker.onmessage = (e) => {
    alert(e.data);
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}

lightTaskBtnWorker.addEventListener("click", () => {
  containerElWorker.classList.toggle("brown");
});
