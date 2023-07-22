const dropDownEl = document.querySelector("#dropdown");
const inputFieldEl = document.querySelector("#inputField");
const selectedValueEl = document.querySelector("#selectedValue");

const optionItemEls = document.querySelectorAll(".optionItem");

inputFieldEl.addEventListener("click", () => {
  const isExpended = dropDownEl.getAttribute("data-state") === "expended";
  if (isExpended) dropDownEl.setAttribute("data-state", "");
  else dropDownEl.setAttribute("data-state", "expended");
});

// Item Select Action
optionItemEls.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    const isActive = optionItem.getAttribute("data-state") === "active";
    if (!isActive) {
      optionItemEls.forEach((op) => {
        op.setAttribute("data-state", "");
      });
      optionItem.setAttribute("data-state", "active");
      dropDownEl.setAttribute("data-state", "");
      selectedValueEl.innerText = optionItem.getAttribute("data-option-name");
      dropDownEl.setAttribute(
        "data-selected",
        optionItem.getAttribute("data-option-name")
      );
    }
  });
});
