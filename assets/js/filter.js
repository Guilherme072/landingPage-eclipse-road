const allItems = Array.from(document.querySelectorAll('.user-item'));

  function applyFilters() {
    const platformFilter = document.getElementById('filter_select_plataform').value;
    const categoryFilter = document.getElementById('filter_select_category').value;
    const followersFilter = document.getElementById('filter_select_followers').value;
    const searchQuery = document.getElementById('filter_search').value.trim().toLowerCase();

    // Monta dados pro Fuse
    const data = allItems.map(el => ({
      element: el,
      name: el.getAttribute('filter_name')?.toLowerCase() || '',
      platform: el.getAttribute('filter_plataform') || '',
      category: el.getAttribute('filter_category') || '',
      followers: parseInt(el.getAttribute('filter_followers')) || 0
    }));

    let filtered = data;

    // Aplica Fuse se tiver busca
    if (searchQuery !== "") {
      const fuse = new Fuse(data, {
        keys: ['name'],
        threshold: 0.4
      });
      filtered = fuse.search(searchQuery).map(result => result.item);
    }

    for (const item of data) {
      const matchSearch = filtered.includes(item);
      const matchPlatform = platformFilter === "all" || item.platform.split(',').includes(platformFilter);
      const matchCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchFollowers = followersFilter === "all" || item.followers >= parseInt(followersFilter);

      const show = matchSearch && matchPlatform && matchCategory && matchFollowers;

      item.element.style.display = show ? "" : "none";
      item.element.classList.toggle("hidden", !show);
    }

    // Botão de reset
    const botao = document.getElementById('meuBotao');
    const isFiltered =
      platformFilter !== 'all' ||
      categoryFilter !== 'all' ||
      followersFilter !== 'all' ||
      searchQuery !== '';
    if (botao) botao.style.display = isFiltered ? 'none' : 'inline-block';
  }

  // Atualiza em tempo real ao digitar
  document.getElementById('filter_search').addEventListener('input', applyFilters);
  document.querySelectorAll('.filter select').forEach(el => {
    el.addEventListener('change', applyFilters);
  });

  // Aplica inicialmente
//   applyFilters();