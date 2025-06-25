document.addEventListener("DOMContentLoaded", function () {
  // Animações que devem rodar normalmente
  lottie.loadAnimation({
    container: document.getElementById("scene"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/icon-json/Scene.json"
  });

  lottie.loadAnimation({
    container: document.getElementById("poetas"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "/icon-json/foto-perfil-puro-suco-br.json"
  });

  // Função para ativar a animação do #push quando ele aparecer na tela
  const pushAnimation = () => {
    lottie.loadAnimation({
      container: document.getElementById("push"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/icon-json/.json"
    });
  };

  // Cria um observador de interseção para o elemento #push
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("INTERSECt")
        // Ativa a animação quando o elemento entra na tela
        pushAnimation();
        observer.unobserve(entry.target); // Interrompe o observador após ativar a animação
      }
    });
  }, { threshold: 0.5 }); // 50% do elemento precisa estar visível

  // Começa a observar o elemento #push
  const pushElement = document.getElementById("push");
  observer.observe(pushElement);
});

window.scrollTo(0, 0);

