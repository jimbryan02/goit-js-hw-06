
const colorButton = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

colorButton.addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorDisplay.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
