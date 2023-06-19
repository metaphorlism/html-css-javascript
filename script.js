const inputEl = document.getElementById("input");
const textEl = document.getElementById("text");

inputEl.addEventListener("change", (event) => {
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
          const markdownHTML = markdown(event.target.result.toString());
          textEl.innerHTML = markdownHTML;
          hljs.highlightAll();
        }
    }; //end onload()
    reader.readAsText(event.target.files[0]);
  }
});
