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