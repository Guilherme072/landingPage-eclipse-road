function isMobile() {
    return window.innerWidth <= 768; // Define um limite de largura para dispositivos móveis e tablets
  }
  
  if (isMobile()) {
    window.addEventListener('scroll', function () {
      // Calcula a altura da janela
      const windowHeight = window.innerHeight;
  
      // Obtém a distância que foi rolada da parte superior da página
      const scrollY = window.scrollY || document.documentElement.scrollTop;
  
      // 1% da altura da janela
      const oneVh = windowHeight * 0.01;
  
      // Verifica se a rolagem foi exatamente 100vh
      if (Math.abs(scrollY - oneVh) > 100) {
        document.querySelector(".header").style.background = "rgb(0 0 0 / 86%)";
      } else {
        document.querySelector(".header").style.background = "transparent";
      }
    });
  }
  
