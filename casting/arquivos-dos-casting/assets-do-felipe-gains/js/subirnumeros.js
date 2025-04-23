// Função para animar a contagem dos números
const startCounting = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 650;

            if (count < target) {
                counter.innerText = `+${Math.ceil(count + increment)}`; // Atualiza o número de forma arredondada
                setTimeout(updateCount, 10); // Chama novamente para continuar a contagem
            } else {
                counter.innerText = `+${target}`; // Garante que o número final seja exato
            }
        };
        updateCount();
    });
};

// Configuração do Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(); // Inicia a contagem quando o elemento entra na tela
            observer.disconnect(); // Desconecta o observer após a contagem começar
        }
    });
}, { threshold: 0.5 }); // O elemento precisa estar 50% visível para acionar

// Observa o elemento com a classe .estatisticas
const statisticsSection = document.getElementById('estatistica');
observer.observe(statisticsSection);
