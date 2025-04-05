const button = document.querySelector('.cta-button .glow-outline');
const light = document.querySelector('.cta-button .light');

let angle = 0;
const radius = 50; // Raio de rotação
let animationFrameId;

function rotateLight() {
  angle += 1;
  const x = Math.cos(angle * Math.PI / 180) * radius;
  const y = Math.sin(angle * Math.PI / 180) * radius;

  light.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

  animationFrameId = requestAnimationFrame(rotateLight);
}

button.addEventListener('mouseenter', () => {
  rotateLight();
});

button.addEventListener('mouseleave', () => {
  cancelAnimationFrame(animationFrameId);
  angle = 0;
  light.style.transform = 'translate(-50%, -50%)';
});
