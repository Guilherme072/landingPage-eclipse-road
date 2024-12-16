document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link');
    var currentURL = window.location.href;
  
    navLinks.forEach(function(link) {
      if (currentURL.includes(link.getAttribute('href'))) {
        link.classList.add('active'); // Adiciona a classe 'active' para indicar a aba ativa
      }
    });
  });
  