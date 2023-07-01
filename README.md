# Worker.js

**Enhancing Website Performance with Web Workers**
Worker.js is a JavaScript library that enables the effective use of Web Workers in website development. Web Workers provide a way to run JavaScript code in the background, separate from the main thread of the web page. This separation allows for improved performance, as the main thread can focus on handling user interactions and rendering the user interface, while computationally intensive tasks can be offloaded to the background thread.

One of the key benefits of using Worker.js is the ability to execute tasks concurrently, thus enhancing the overall performance of websites. By distributing tasks across multiple threads, the workload is effectively divided, reducing the chances of blocking the main thread and preventing the infamous "freezing" of the website. This approach is particularly useful when dealing with computationally intensive tasks such as complex calculations, data processing, or image manipulation.

## Code

### HTML

We will create normal website to test how worker works in webs.

```html
<body>
  <div class="container without-worker">
    <h1>Without Worker</h1>
    <button class="heavyTask-btn">Heavy Task</button>
    <button class="lightTask-btn">Light Task</button>
  </div>
  <div class="container with-worker">
    <h1>With Worker</h1>
    <button class="heavyTask-btn">Heavy Task</button>
    <button class="lightTask-btn">Light Task</button>
  </div>
  <script src="/with-worker/script.js"></script>
  <script src="/without-worker/script.js"></script>
</body>
```

### CSS

We are styling it a bit to change the background as a delicate task.

```css
*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.container {
  width: 20rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: blueviolet;
  color: white;
  padding: 2rem;
  gap: 1rem;
  align-items: center;
}

.container button {
  width: fit-content;
}

.brown {
  background-color: brown;
}
```

### JavaScript

We will provide only the worker js file and how it works in this blog post.
In our js file that's used to handle user interaction. `script.js`

```js
const heavyTaskBtnWorker = document.querySelector(
  ".with-worker .heavyTask-btn"
);
const lightTaskBtnWorker = document.querySelector(
  ".with-worker .lightTask-btn"
);
const containerElWorker = document.querySelector(".with-worker");

// Checking Worker is available
if (window.Worker) {
  // Create new instance of Worker
  // Passing our worker js to it as a parameter
  const worker = new Worker("./worker.js");

  // Everytime heavy task button click
  // We will post a message to our worker
  heavyTaskBtnWorker.addEventListener("click", () => {
    worker.postMessage("NUMBER");
    console.log("Message posted to worker");
  });

  // Assign onmessage event when our task is completed.
  worker.onmessage = (e) => {
    alert(e.data);
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}

// In light task we will change the background color of the container
lightTaskBtnWorker.addEventListener("click", () => {
  containerElWorker.classList.toggle("brown");
});
```

This is our worker file. `worker.js`

```js
// This self refers to worker object
// Worker object have onmessage event
// Trigger every time postMessage method is used.
self.onmessage = function (e) {
  console.log("Worker: Message received from main script");
  // This is our heavy task
  let num = 0;
  for (let i = 1; i < 5_000_000_000; i++) {
    num += i;
  }
  // Will post a message to the main thread when the task is completed.
  this.postMessage(num);
};
```

### On Browser

![Example on browser](https://github.com/metaphorlism/html-css-javascript/assets/46731773/b36c4114-fce7-45fa-9c04-1cbd4bd05529)

- Difference
  - Without Worker
    - Heavy Task will freeze your browser
  - With Worker
    - Heavy Task will not freeze your browser

## Resource

[GitHub](https://github.com/metaphorlism/html-css-javascript/tree/workerjs)
