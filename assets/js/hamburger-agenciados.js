const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

// Quando o hambúrguer for clicado, alterna a classe 'active' na navbar
hamburger.addEventListener('click', () => {
  // Alterna a classe 'active' para a navbar, o que fará a overlay descer
  document.querySelector('.navbar').classList.toggle('active');
});
