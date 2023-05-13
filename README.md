# Text Typing Animation
![Example](https://hackmd.io/_uploads/Sy3eqf54h.png)  

## How does it work
![Architecture](https://hackmd.io/_uploads/B1DQ57qN2.png)
We do smooth reveal our text but in typing we don't want typing to be smoothly reveal we want to reveal 1 text at a time. We can get it by using `steps` in `css` to reveal many letters you want by giving it text length.

## Code
**_NOTE:_** We are putting text in container because we want to show the animation in the middle of the website. You don't need to if you want.
```html
<div class="container">
  <span class="container__sentence">Hello Not World World Hello</span>
</div>
```

In CSS file:

```css
*, 
*::after, 
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}
```  
**_NOTE:_** For typing animation we need monospace font for each frame.

![Monospace Font Comparation](//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Proportional-vs-monospace-v5.svg/400px-Proportional-vs-monospace-v5.svg.png)  

> A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space. [Wikipedia](https://en.wikipedia.org/wiki/Monospaced_font)

By using monospace font we can use steps() in our animation property.

Initailize your variable in `:root` selector before go into styling. So you can change everything from variable.

```css
:root {
  --clr-background: #cecece;
  --clr-text: #000;
  --clr-line: black;
  --clr-line-low: rgba(0, 0, 0, .3);
  --w-line: 5px;
  --size-font: 3.2rem;
  --letter-spacing: 1rem;
  --duration-typing: 5s;
  --duration-blinking: 1s;
  --length-letter: 15;
}

body {
  background-color: var(--clr-background);
}
```
Create keyframe for our animation. There are 2 animation like reveal (typing) and blinking animation.
```css
@keyframes typing {
  from {
    left: 0px;
  }to {
    left: 100%;
  }
}

@keyframes blinking {
  0% {
    border-left-color: var(--clr-line);
  } 50% {
    border-left-color: var(--clr-line-low);
  } 100% {
    border-left-color: var(--clr-line);
  }
}
```


```css
.container {
  /* Centering the text */
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  background-color: inherit;
}

.container__sentence {
  position: relative; /* Need relative pos for after's absolute pos */
  font-size: var(--size-font);
  text-transform: uppercase;
  background-color: inherit;
  letter-spacing: var(--letter-spacing);
}

.container__sentence::after {
  content: ""; /* After need empty content */
  position: absolute;
  inset: 0; /* Top: 0; Left: 0; Right: 0; Bottom: 0; */
  background-color: inherit;
  /* Create line with left border */
  border-left: var(--w-line) solid var(--clr-line);
  /* In animation we need to run typing animation 
   * first before blinking animtion start.
   * Because when you typing blinking animation is not exist
   * Steps accept value of the length of the text */
  animation: var(--duration-typing) steps(var(--length-letter)) forwards typing,
    var(--duration-blinking) linear var(--duration-typing) infinite blinking;
}
```
If you want to make it dynamic it'll require `JavaScript` to acheive it.
```javascript
const textEl = document.querySelector(".container__sentence")
// Set variable in the css for steps
textEl.style.setProperty("--length-letter", textEl.innerText.length)
```
When set new property to element to will overwrite the variable from `:root`.
