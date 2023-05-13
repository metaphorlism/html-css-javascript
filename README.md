# Compare Your Image  

## How does it work  

![Achitecture](https://hackmd.io/_uploads/ByGtYpu4h.png)  

## There are two methods  

1. We clip both of the image.  

![Compare In Action](https://hackmd.io/_uploads/rJMFFauEn.png)  

2. We clip the front layer image.  

![Compare In Action v2](https://hackmd.io/_uploads/H1fKFadVn.png)  

## Code  

**1st Method**  

Import your style and script into your HTML file.
```htmlembedded
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Compare 2 Images</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="./script.js" defer></script>
 </head>
```

```htmlembedded
<body>
    <div id="container">
        <img
            src=<image-src>
            alt=<image-src-name>
            id="first-image"
        />
        <img
            src=<image-src>
            alt=<image-src-name>
            id="second-image"
        />
        <input
            type="range"
            name="slider"
            id="image-slider"
            min="0"
            max="100"
            value="50"
        />
    </div>
</body>
```

Create CSS file

```css
:root {
  --h-image-container: 300px; /* Height of the image container */
  --w-image-container: 500px; /* Width of the image container */
  --w-range-thumb: 6px; /* Width of the range's thumb (slider) */
  --clr-range-thumb: green; /* Color of the slider */
}

#container {
  position: relative;
  width: var(--w-image-container);
  height: var(--h-image-container);
  border-radius: 10px;
  margin: 2rem auto;
}

#first-image,
#second-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

#image-slider {
  position: absolute;
  /* Width range from left to right and width of the thumb of slider */
  width: calc(100% + var(--w-range-thumb)); 
  /* Center the input field */
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  margin: 0;
  background-color: transparent;
}

#image-slider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  color: transparent;
}

#image-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: var(--h-image-container);
  width: var(--w-range-thumb);
  border-radius: 50%;
  background: var(--clr-range-thumb);
  margin-top: -4px;
}

/* FireFox */
#image-slider::-moz-range-progress {
  background-color: transparent;
}

#image-slider::-moz-range-track {
  background-color: transparent;
}

#image-slider::-moz-range-thumb {
  border: none;
  height: var(--h-image-container);
  width: var(--w-range-thumb);
  background: var(--clr-range-thumb);
}

/* IE */
#image-slider::-ms-fill-lower {
  background-color: transparent;
}

#image-slider::-ms-fill-upper {
  background-color: transparent;
}

#image-slider::-ms-thumb {
  border: none;
  height: var(--h-image-container);
  width: var(--w-range-thumb);
  border-radius: 50%;
  background: var(--clr-range-thumb);
}
```
 
Create JavaScript file

```javascript
// Get the elements of the slider, first image and second images
const slider = document.getElementById("image-slider");
const imageEl1 = document.getElementById("first-image");
const imageEl2 = document.getElementById("second-image");

clipImage(); // Clip the image

// Add event listener to slider
slider.oninput = () => clipImage();

function clipImage() {
  // Clip First Image
  imageEl1.style.clipPath = `inset(0 ${
    imageEl1.width - (imageEl1.width * slider.value) / 100
  }px 0 0)`;

  // Clip Second Image
  imageEl2.style.clipPath = `inset(0 0 0 ${
    (imageEl2.width * slider.value) / 100
  }px)`;
}
```

We are using inset of clip path in css to clip the image.  
```css
CSSClassSelector {
    /* inset(top right bottom left) */
    clip-path: inset(0 0 0 0);
}
```
![Clip path inset example](https://hackmd.io/_uploads/HJd21RON2.png)

**2nd Method**  

```javascript
// Get the elements of the slider and front images
const slider = document.getElementById("image-slider");
// We are choosing second image as front iamges because it on top of the other image
const imageEl = document.getElementById("second-image");

clipImage(); // Clip the image

// Add event listener to slider
slider.oninput = () => clipImage();

function clipImage() {
  // Clip the image
  imageEl.style.clipPath = `inset(0 0 0 ${
    (imageEl.width * slider.value) / 100
  }px)`;
}
```