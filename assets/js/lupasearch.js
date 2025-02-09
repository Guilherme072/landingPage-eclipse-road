document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
      container: document.getElementById("lottie-search"), 
      renderer: "svg", // 
      loop: true, 
      autoplay: true, 
      path: "lottieflow-search-08-ffffff-easey.json" 
    });
    
    lottie.loadAnimation({
      container: document.getElementById("info"), 
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "info.json" 
    });
  });



