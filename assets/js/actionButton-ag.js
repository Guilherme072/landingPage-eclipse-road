document.addEventListener('DOMContentLoaded', function () {
    

    const backToTopButton = document.getElementById('backToTop');
    

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            buttonCasting.style.display = 'flex';
            // planilhaButton.style.display = 'flex';
            // pdfButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
                buttonCasting.style.opacity = '1';
                // planilhaButton.style.opacity = '1';
                // pdfButton.style.display = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            buttonCasting.style.opacity = '0';
            // planilhaButton.style.opacity = '0';
            // pdfButton.style.display = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
                buttonCasting.style.display = 'none';
                // planilhaButton.style.display = 'none';
                // pdfButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    toggleButtons();

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://w.app/eclipseroad';
    });

    
});
