const boxes = document.querySelectorAll('.box');
    const button = document.getElementById('toggleButton');
    let numbersVisible = false; // Começa desativado

    function updateNumbers() {
        const visibleBoxes = document.querySelectorAll('.box:not([style*="display: none"])'); // Pega apenas os visíveis
        visibleBoxes.forEach((box, index) => {
            const numberSpan = box.querySelector('.number');
            if (numberSpan) {
                numberSpan.textContent = index + 1; // Reatribui a numeração correta
                numberSpan.style.display = numbersVisible ? "block" : "none"; // Mantém a exibição correta
            }
        });
    }

    // Ativa/desativa a exibição dos números ao clicar no botão
    button.addEventListener('click', () => {
        numbersVisible = !numbersVisible;
        updateNumbers();
        button.textContent = numbersVisible ? "Desativar Números" : "Ativar Números";
    });

    // Função que aplica os filtros
    function aplicarFiltros() {
        const plataformaSelecionada = document.getElementById('filter_select_plataform').value;
        const categoriaSelecionada = document.getElementById('filter_select_category').value;
        const seguidoresSelecionado = document.getElementById('filter_select_followers').value;
        const pesquisaNome = document.getElementById('filter_search').value.toLowerCase();

        boxes.forEach(box => {
            const plataforma = box.getAttribute('filter_plataform').split(','); // Lida com múltiplas plataformas
            const categoria = box.getAttribute('filter_category');
            const seguidores = parseInt(box.getAttribute('filter_followers'));
            const nome = box.querySelector('.profile-name').innerText.toLowerCase();

            let mostrar = true;

            // Verifica se precisa filtrar por plataforma
            if (plataformaSelecionada !== "all" && !plataforma.includes(plataformaSelecionada)) {
                mostrar = false;
            }

            // Verifica se precisa filtrar por categoria
            if (categoriaSelecionada !== "all" && categoria !== categoriaSelecionada) {
                mostrar = false;
            }

            // Verifica se precisa filtrar por seguidores
            if (seguidoresSelecionado !== "all" && seguidores < parseInt(seguidoresSelecionado)) {
                mostrar = false;
            }

            // Verifica pesquisa por nome
            if (pesquisaNome && !nome.includes(pesquisaNome)) {
                mostrar = false;
            }

            // Aplica o filtro na exibição do influenciador
            box.style.display = mostrar ? "block" : "none";
        });

        // Atualiza os números corretamente após filtrar
        updateNumbers();
    }

    // Adicionando eventos para detectar mudanças nos filtros
    document.getElementById('filter_select_plataform').addEventListener('change', aplicarFiltros);
    document.getElementById('filter_select_category').addEventListener('change', aplicarFiltros);
    document.getElementById('filter_select_followers').addEventListener('change', aplicarFiltros);
    document.getElementById('filter_search').addEventListener('input', aplicarFiltros);

    // Atualiza os números ao carregar a página
    updateNumbers();