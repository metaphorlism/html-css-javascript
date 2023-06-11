const inputEl = document.getElementById("input");
const previewEl = document.getElementById("preview");

// Create on change function input for #input
inputEl.addEventListener("change", (event) => {
  // Get the file from input
  const file = event.target.files[0];

  // You can set allow extension before set file into image tag in html
  // Using regex in order to check filename extension
  // \.jpg | \.jpeg | \.png | \.gif ... are file extension you can add and remove
  // '\' to escape the '.' character
  // '$' anchors the pattern to the end of the string
  // 'i' case-insensitive
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  // Check the file extension
  if (!allowedExtensions.exec(file.name)) {
    alert(
      "Invalid file type. Please select an image file (JPG, JPEG, PNG, GIF)."
    );
    event.target.value = "";
    return false;
  }

  const imageURL = URL.createObjectURL(file);
  previewEl.setAttribute("src", imageURL);
});
