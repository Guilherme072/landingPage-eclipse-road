document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.nav-link');
  var currentPath = window.location.pathname; // Obtém o caminho da URL atual
  
  navLinks.forEach(function(link) {
    var linkPath = new URL(link.href).pathname; // Obtém o caminho do link
    if (currentPath.startsWith(linkPath)) { // Verifica se o caminho atual começa com o do link
      link.classList.add('active'); // Adiciona a classe 'active' para indicar a aba ativa
    }
  });
});
