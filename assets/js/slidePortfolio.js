document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        const images = slide.querySelectorAll('img');
        
        // Exibe todas as imagens
        images.forEach((img) => {
            img.style.opacity = '1';
        });
    });
});