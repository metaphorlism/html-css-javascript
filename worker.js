self.onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let num = 0;
  for (let i = 1; i < 5_000_000_000; i++) {
    num += i;
  }
  this.postMessage(num);
};
