document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
      container: document.getElementById("lottie-search"), 
      renderer: "svg", // 
      loop: true, 
      autoplay: true, 
      path: "lottieflow-search.json" 
    });
    
    lottie.loadAnimation({
      container: document.getElementById("info"), 
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "info.json" 
    });
  });



