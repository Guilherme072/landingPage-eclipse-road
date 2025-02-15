document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementById("icon-twitter");

    icon.addEventListener("mouseenter", function () {
        icon.setAttribute("colors", "primary:#836FFF,secondary:#836FFF"); // Muda para roxo ao passar o mouse
    });

    icon.addEventListener("mouseleave", function () {
        icon.setAttribute("colors", "primary:#ffffff,secondary:#ffffff"); // Volta para branco
    });
});
  