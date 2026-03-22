const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";

const expeimentList = document.querySelectorAll(".experiment");
expeimentList.forEach((experiment) => {
  experiment.textContent = "This is an experiment";
});
