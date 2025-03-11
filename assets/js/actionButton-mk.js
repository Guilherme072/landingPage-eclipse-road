document.addEventListener('DOMContentLoaded', function () {
    // Ajusta para garantir que o site comece no topo ao recarregar
    // if (window.location.hash !== '#inicio') {
    //    // window.location.hash = '#inicio';
    // }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    // Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 500);
        }
    }

    // Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    // Exibe o botão do WhatsApp logo que a página carregar, sem depender do scroll
    whatsappButton.style.display = 'flex';
    setTimeout(() => {
        whatsappButton.style.opacity = '1';
    }, 10);

    // Ação ao clicar no botão "Voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://w.app/eclipseroad';
    });
});
