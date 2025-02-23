const targetElement = document.querySelector('#increase-numbers');

// Função para executar quando o elemento estiver visível na tela
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            loadIncreaseNumbers()

            observer.unobserve(entry.target);
        }
    });
};

// Configurações do observer (você pode ajustar o threshold conforme necessário)
const observerOptions = {
    root: null, // null significa que será observado no viewport
    rootMargin: '0px',
    threshold: 0.5 // Percentual de visibilidade para disparar o callback
};

// Cria o observer com o callback e as opções
const observer = new IntersectionObserver(callback, observerOptions);

// Inicia a observação do elemento alvo
if (targetElement) {
    observer.observe(targetElement);
} else {
    console.warn('Elemento alvo não encontrado');
}


function loadIncreaseNumbers(){
    setTimeout(() => {
        increaseNumber(document.querySelector("#followers-count"), 1, 3.1, 0.1, 70)
        increaseNumber(document.querySelector("#youtube-count"), 1, 17, 1, 70)
        increaseNumber(document.querySelector("#instagram-count"), 70, 85, 1, 70)
        increaseNumber(document.querySelector("#views-count"), 1, 3.5, 0.1, 50)
    }, 50)
}

// atualiza um HTML para subir um número de tempo em tempo
// ----------
// element: o elemento que será atualizado
// initialNumber: o número que vai começar
// finalNumber: o número final
// increaseNumber: de quanto em quanto vai subir
// delay (em milisegundos): de quanto em quanto tempo o número vai subir
// ----------
function increaseNumber(element, initialNumber, finalNumber, increaseNumber, delay) {
    let actualNumber = initialNumber;

    element.innerHTML = String(actualNumber).slice(0, 3);

    const interval = setInterval(() => {
        actualNumber += increaseNumber;

        if (actualNumber >= finalNumber) {
            element.innerHTML = String(finalNumber).slice(0, 3);;
            return clearInterval(interval)
        }

        element.innerHTML = String(actualNumber).slice(0, 3);;
    }, delay)


}