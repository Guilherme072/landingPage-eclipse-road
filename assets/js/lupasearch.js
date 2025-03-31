document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
      container: document.getElementById("lottie-search"), 
      renderer: "svg", // 
      loop: true, 
      autoplay: true, 
      path: "/icon-json/lottieflow-search.json" 
    });
    
    lottie.loadAnimation({
      container: document.getElementById("lottieflow-background"), 
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/icon-json/lottieflow-background.json" 
    });
    lottie.loadAnimation({
      container: document.getElementById("botao-download"), 
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/icon-json/botao-download.json" 
    });
  });



