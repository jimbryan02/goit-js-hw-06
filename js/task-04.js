let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

decrementButton.addEventListener("click", function() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", function() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});