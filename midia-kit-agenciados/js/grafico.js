// Valores fixos para cada segmento
const segments = [
    { id: 'segment1', value: 100, color: '#0000FF' },
    { id: 'segment2', value: 65, color: '#836FFF' },
    { id: 'segment3', value: 50, color: '#9F468F' },
    { id: 'segment4', value: 15, color: '#49116b' }
];

// Aplicar valores após carregamento
window.addEventListener('DOMContentLoaded', () => {
    segments.forEach((seg, index) => {
        const element = document.getElementById(seg.id);
        const rotation = (seg.value * 1.8) - 135;
        
        setTimeout(() => {
            element.style.borderTopColor = seg.color;
            element.style.borderRightColor = seg.color;
            element.style.transform = `rotate(${rotation}deg)`;
        }, index * 300);
    });
});

// const segments = {
//     segment1: {
//         element: document.getElementById('segment1'),
//         slider: document.getElementById('slider1'),
//         value: document.getElementById('value1'),
//         color: 'var(--color-1)'
//     },
//     segment2: {
//         element: document.getElementById('segment2'),
//         slider: document.getElementById('slider2'),
//         value: document.getElementById('value2'),
//         color: 'var(--color-2)'
//     },
//     segment3: {
//         element: document.getElementById('segment3'),
//         slider: document.getElementById('slider3'),
//         value: document.getElementById('value3'),
//         color: 'var(--color-3)'
//     },
//     segment4: {
//         element: document.getElementById('segment4'),
//         slider: document.getElementById('slider4'),
//         value: document.getElementById('value4'),
//         color: 'var(--color-4)'
//     }
// };

// const totalElement = document.getElementById('total');

// function updateSegment(segment) {
//     const value = segment.slider.value;
//     const rotation = (value * 1.8) - 135;
    
//     segment.element.style.borderTopColor = segment.color;
//     segment.element.style.borderRightColor = segment.color;
//     segment.element.style.transform = `rotate(${rotation}deg)`;
    
//     segment.value.textContent = `${value}%`;
//     updateTotal();
// }

// function updateTotal() {
//     const total = Object.values(segments).reduce(
//         (acc, curr) => acc + parseInt(curr.slider.value), 0
//     );
//     totalElement.textContent = `${total > 100 ? 100 : total}%`;
// }

// // Initialize segments
// Object.values(segments).forEach(segment => {
//     segment.slider.addEventListener('input', () => updateSegment(segment));
//     updateSegment(segment);
// });