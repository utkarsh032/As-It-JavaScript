const customCheckBox = document.querySelectorAll(".custom-checkbox");
const goalInput = document.querySelectorAll(".goal-input");
const checkIcon = document.querySelector(".check-icon");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");

customCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalList = [...goalInput].every(function (input) {
      return input.value;
    });

    if (allGoalList) {
      checkbox.parentElement.classList.toggle("completed");
      progressValue.style.width = "33.33%";
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

goalInput.forEach((input) => {
  input.addEventListener("click", () => {
    progressBar.classList.remove("show-error");
  });
});
