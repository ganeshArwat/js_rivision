//Select the existing double button, which can be cloned later
let dblButton = document.querySelector("button.double");
// Add eventlistener to holder div
document.querySelector("#doubleHolder").addEventListener("click", function (e) {
  // check if element with double class is clicked
  if (e.target.classList.contains("double")) {
    // Use cloned button and append it as child to holder
    // Passing true to cloneNode will create a deep copy of the element
    e.currentTarget.appendChild(dblButton.cloneNode(true));
    e.currentTarget.appendChild(dblButton.cloneNode(true));
    // Remove the button that was clicked
    e.currentTarget.removeChild(e.target);
  }
});
