const display = document.querySelector(".display");
const dark = document.querySelector(".dark-btn");
const fire = document.querySelector(".fire-btn");
const blue = document.querySelector(".blue-btn");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
}

dark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

fire.addEventListener("click", () => {
  document.documentElement.classList.toggle("fire");
});

blue.addEventListener("click", () => {
  document.documentElement.classList.toggle("blue");
});
