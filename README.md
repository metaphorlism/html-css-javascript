# Import Text

Import your text from your text file into your website using HTML, CSS and JavaScript.

## Code

### HTML

We create normal html. We are using pre tag because it'll make our text from file we imported look the same.

```html
<div id="container">
  <input type="file" id="input" />
  <pre id="text"></pre>
</div>
```

### CSS

We create a little bit of styling to make it look a bit organize.

```css
*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
}

#container {
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: 0 auto;
  gap: 1rem;
  margin-top: 3rem;
}

#text {
  resize: none;
  overflow: hidden;
}
```

### JavaScript

In our javascript we need our input element and text element.

```js
const inputEl = document.getElementById("input");
const textEl = document.getElementById("text");
```

Assign change event to input element. When our input element change it'll call the inputChangeHandler function.

```js
inputEl.addEventListener("change", inputChangeHandler);
```

Let's create our inputChangeHandler function.

1. Create reader variable
2. Check if `File`, `FileReader`, `FileList` and `Blob` api is available
3. Create a new instance of FileReader object and assign it to our reader variable
4. If api is not available, we'll send alert and return

```js
let reader;
if (window.File && window.FileReader && window.FileList && window.Blob) {
  reader = new FileReader();
} else {
  alert(
    "The File APIs are not fully supported by your browser. Fallback required."
  );
  return;
}
```

Let's work the file from user now.

1. Check if is file does exist
2. We will set `onload` event to reader. The event is triggered when file is successfully load.
3. Set reader to read our file

You can do anything after it load.

```js
if (event.target.files && event.target.files[0]) {
  reader.onload = function (event) {
    // Your code
    if (event.target)
      if (event.target.result) {
        textEl.innerText = event.target.result.toString();
      }
  }; //end onload()
  reader.readAsText(event.target.files[0]);
}
```

This is **inputChangeHandler function**

```js
function inputChangeHandler(event) {
  let reader;
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    reader = new FileReader();
  } else {
    alert(
      "The File APIs are not fully supported by your browser. Fallback required."
    );
    return;
  }

  if (event.target.files && event.target.files[0]) {
    reader.onload = function (event) {
      if (event.target)
        if (event.target.result) {
          textEl.innerText = event.target.result.toString();
        }
    }; //end onload()
    reader.readAsText(event.target.files[0]);
  }
}
```

### On Browser

**Before**  
![Before](https://hackmd.io/_uploads/H1_kzXsIn.png)

**After**  
![After](https://hackmd.io/_uploads/S13ff7iUn.png)

## Resource

[GitHub](https://github.com/metaphorlism/html-css-javascript/tree/text-import)
