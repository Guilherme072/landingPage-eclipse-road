const switchButton = document.getElementById("switch");
const ellipsisButton = document.getElementById("ellipsisButton");

ellipsisButton.addEventListener("click", () => {
  // Alterna a visibilidade do switch
  switchButton.style.display = switchButton.style.display === "none" ? "inline-block" : "none";
});

