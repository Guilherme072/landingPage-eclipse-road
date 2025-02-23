document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const logos = Array.from(track.children);
    
    // Duplicar as logos para criar o loop infinito
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });
  
    let scrollAmount = 0;
    let scrollSpeed = 0.6; // Velocidade de rolagem
  
    function animateCarousel() {
      scrollAmount -= scrollSpeed;
  
      // Garantir que a rotação seja suave e contínua
      if (Math.abs(scrollAmount) >= logos[0].offsetWidth + 50) {
        scrollAmount = 0;
        track.appendChild(track.firstElementChild); // Move o item para o final
      }
  
      track.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(animateCarousel);
    }
  
    animateCarousel();
  });
  