# Markdown in HTML

In this conversion from markdown to HTML. We will need function that can convert our markdown text to HTML. We can use [drawdownJS](https://github.com/adamvleggett/drawdown).

Import your text from your text file into your website using HTML, CSS and JavaScript. [Here](#On-Browser)

- [Repo](#Resource)

## Code

To use markdown function in `drawdown.js` in our project we need to download `drawdown.js` from their repository [here](https://github.com/adamvleggett/drawdown/blob/master/drawdown.js) and put it into your project folder.

If we want to highlight the code in markdown we can use:

- [HighlightJS](https://highlightjs.org/) 
- [TailwindCSS](https://tailwindcss.com/) ([Typography](https://tailwindcss.com/docs/typography-plugin) plugin)

### HTML

We create normal html.

#### Head

```html
<head>
  <!-- Your default head -->
  <!-- Import our drawdown js -->
  <script src="/drawdown.js"></script>
  <!-- Styling for highlight js -->
  <link
    rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/a11y-dark.min.css"
  />
  <!-- Import highlight js using CDN -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
  <!-- Import TailwindCSS with typography plugin using CDN -->
  <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
</head>
```

#### Body

```html
<body>
  <div class="flex flex-col items-center">
    <!-- Tell the input file accept markdown file -->
    <!-- It'll make user experince better because it filter only markdown file -->
    <!-- User still can input random file because default behavior of the file input field -->
    <input type="file" id="input" accept=".md, text/markdown" />
    <div id="text" class="prose"></div>
  </div>
  <script src="/script.js"></script>
</body>
```

The `prose` class is default styling for markdown. If you want to learn more you can checkout the [document](https://tailwindcss.com/docs/typography-plugin).

### CSS

We are using `TailwindCSS` class name.

### JavaScript

**NOTE**: It's the same from text import but change in onload event.

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

After the text is load:

1. We'll convert it into from `markdown` to `HTML` using markdown function
2. Assign it into our text element's inner html
3. Call `highlightAll` function in `hljs` object to highlight the code.

```js
if (event.target.files && event.target.files[0]) {
  reader.onload = function (event) {
    // Your code
    if (event.target)
      if (event.target.result) {
        const markdownHTML = markdown(event.target.result.toString());
        textEl.innerHTML = markdownHTML;
        hljs.highlightAll();
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

![Before](https://github.com/metaphorlism/html-css-javascript/assets/46731773/9bf4330e-1457-47a8-ae3f-f84e948abaf0)

**After**  

![After](https://github.com/metaphorlism/html-css-javascript/assets/46731773/ea1d050a-95b2-4e4d-afab-05f6f64b3cd9)


## Resource

[GitHub](https://github.com/metaphorlism/html-css-javascript/tree/markdown-html)
