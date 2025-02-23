// Valores fixos para cada segmento
const segments2 = [
    { id: 'segment21', value: 100, color: '#0000FF' },
    { id: 'segment22', value: 65, color: '#836FFF' },
    { id: 'segment23', value: 50, color: '#9F468F' },
    { id: 'segment24', value: 15, color: '#49116b' }
];

// Aplicar valores após carregamento
window.addEventListener('DOMContentLoaded', () => {
    segments2.forEach((seg, index) => {
        const element = document.getElementById(seg.id);
        const rotation = (seg.value * 1.8) - 135;

        setTimeout(() => {
            element.style.borderTopColor = seg.color;
            element.style.borderRightColor = seg.color;
            element.style.transform = `rotate(${rotation}deg)`;
        }, index * 300);
    });
});