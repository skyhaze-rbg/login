function toggleSidepanel() {
  var sidepanel = document.getElementById("mySidepanel");
  var currentWidth = sidepanel.style.width;
  if (currentWidth === "350px" || currentWidth === "") {
    // Close the sidepanel
    sidepanel.style.width = "0";
  } else {
    // Open the sidepanel
    sidepanel.style.width = "350px";
    sidepanel.style.display = "block"; // Show the sidepanel
  }
}

function toggleRangeSlider() {
  var rangeSlider = document.getElementById("rangeSlider");
  rangeSlider.classList.toggle("show");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let itemCount = 0;

function addItem() {
  itemCount++;
  const itemContainer = document.getElementById("itemContainer");

  // Create a new span element
  const newItem = document.createElement("span");
  newItem.className = "input-unit";
  newItem.textContent = "Item ";

  // Create a new input field
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.className = "input-field";
  inputField.placeholder = "Text Input";

  // Add margin between the span and input field
  newItem.style.marginRight = "10px";
  newItem.style.display = "flex";

  // Append both the span and input field to the container
  itemContainer.appendChild(newItem);
  itemContainer.appendChild(inputField);
}

function removeItem() {
  const itemContainer = document.getElementById("itemContainer");
  const lastItem = itemContainer.lastChild;

  if (lastItem) {
    itemContainer.removeChild(lastItem);
    itemCount--;
  }
}
