const projectsButton = document.getElementById("projectsButton");
const socialsButton = document.getElementById("socialsButton");

projectsButton.addEventListener("click", () => {
  projectsButton.blur();

  window.location.replace("./projects");
});

socialsButton.addEventListener("click", () => {
  socialsButton.blur();

  window.location.replace("./socials");
});
