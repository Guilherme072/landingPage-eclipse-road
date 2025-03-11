// Função para animar a contagem
function startCounting() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const start = 0;
        const increment = target / 400;
        let current = start;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = current.toFixed(1); // Atualiza o número no span
                requestAnimationFrame(updateCounter);
            } else {
                
            }
        };
        
        updateCounter();
    });
}

// Configuração do Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(); // Inicia a contagem quando o elemento entrar na tela
            observer.disconnect(); // Desconecta o observer após a contagem começar
        }
    });
}, { threshold: 0.5 }); // O elemento precisa estar 50% visível para acionar

// Observa o elemento com a classe .estatisticas
const statisticsSection = document.getElementById('estatistica');
observer.observe(statisticsSection);
