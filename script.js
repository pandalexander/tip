document.addEventListener("DOMContentLoaded", () => {
  const mainScreen = document.getElementById("main-screen");
  const thankYouScreen = document.getElementById("thank-you-screen");
  const returnButton = document.getElementById("return-button");
  const tipButtons = document.querySelectorAll(".tip-button");

  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mainScreen.classList.add("hidden");
      thankYouScreen.classList.remove("hidden");
    });
  });

  returnButton.addEventListener("click", () => {
    thankYouScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
  });
});
