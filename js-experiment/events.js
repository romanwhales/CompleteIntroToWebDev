const button = document.querySelector(".event-button");

button.addEventListener("click", () => {
  alert("Button was clicked!?");
});

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy");

input.addEventListener("keyup", (e) => {
  paragraph.innerText = input.value;
});

document
  .querySelector(".button-container")
  .addEventListener("click", function (e) {
    alert("You clicked on button " + e.target.innerText);
  });
