document.addEventListener('DOMContentLoaded', function () {
    
    window.scrollTo(0, 0);
    
    const seta = document.querySelector("#seta-inicio");

    document.addEventListener("scroll", () => {
        if (window.scrollY > 100) { // Quando rolar mais de 100px
            seta.style.opacity = "0";
            seta.style.pointerEvents = "none"; // Remove interatividade
            setTimeout(() => {
                seta.style.display = "none"; // Remove completamente
            }, 500); // Tempo igual à transição do CSS
        }
    });
});
