document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
      container: document.getElementById("scene"), 
      renderer: "svg", // 
      loop: true, 
      autoplay: true, 
      path: "/icon-json/Scene.json" 
    });

    lottie.loadAnimation({
        container: document.getElementById("profilee"), 
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/icon-json/Profile.json" 
      });
    
      lottie.loadAnimation({
        container: document.getElementById("push"), 
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/icon-json/Push-notification.json" 
      });
});