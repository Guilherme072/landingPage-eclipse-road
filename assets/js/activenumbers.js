const boxes = document.querySelectorAll('.box');
const button = document.getElementById('toggleButton');
let numbersVisible = false; // Começa desativado

// Adicionar os números às boxes
boxes.forEach((box, index) => {
    const numberSpan = box.querySelector('.number');
    if (numberSpan) {
        numberSpan.textContent = index + 1;
    }
});

// Função para alternar a visibilidade dos números
button.addEventListener('click', () => {
    numbersVisible = !numbersVisible; // Alterna entre true e false

    boxes.forEach(box => {
        const numberSpan = box.querySelector('.number');
        if (numberSpan) {
            numberSpan.style.display = numbersVisible ? 'block' : 'none';
        }
    });

    button.textContent = numbersVisible ? "Desativar Números" : "Ativar Números";
});