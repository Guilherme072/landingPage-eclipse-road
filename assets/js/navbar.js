document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.nav-link');
  var currentPath = window.location.pathname; // Obtém o caminho da URL atual (ex: /sobre-nos)
  
  navLinks.forEach(function(link) {
    var linkPath = new URL(link.href).pathname; // Converte o href em caminho absoluto
    if (currentPath === linkPath) {
      link.classList.add('active'); // Adiciona a classe 'active' para indicar a aba ativa
    }
  });
});