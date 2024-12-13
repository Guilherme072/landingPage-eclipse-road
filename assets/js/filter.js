document.querySelectorAll('.filter select, #filter_search').forEach(filter => {
    filter.addEventListener('change', applyFilters);
});

function applyFilters() {
    console.log("FILTROS")
    const platformFilter = document.getElementById('filter_select_plataform').value;
    const categoryFilter = document.getElementById('filter_select_category').value;
    const followersFilter = document.getElementById('filter_select_followers').value;
    const engagementFilter = document.getElementById('filter_select_engajament').value;
    const searchQuery = document.getElementById('filter_search').value.toLowerCase();

    const items = document.querySelectorAll('.user-item');

    console.log(items)

    for(const item of items){
        const platform = item.getAttribute('filter_plataform').split(',');
        const category = item.getAttribute('filter_category');
        const followers = parseInt(item.getAttribute('filter_followers'), 10);
        const engagement = parseInt(item.getAttribute('filter_engajament'), 10);
        const name = item.getAttribute('filter_name') ? item.getAttribute('filter_name').toLowerCase() : "noname";

        const matchesPlatform = platformFilter === 'all' || platform.includes(platformFilter);
        const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
        const matchesFollowers = followersFilter === 'all' || followers >= parseInt(followersFilter, 10);
        const matchesEngagement = engagementFilter === 'all' || engagement >= parseInt(engagementFilter, 10);
        const matchesSearch = name.includes(searchQuery);

        if (matchesPlatform && matchesCategory && matchesFollowers && matchesEngagement && matchesSearch) {
            item.style.display = '';
            item.classList.remove("hidden")
        } else {
            item.style.display = 'none';
            item.classList.add("hidden")
        }
    }

    updateNumbers();
}


function updateNumbers() {
    let youtubeFollowers = 0;
    let instagramFollowers = 0;
    let xViews = 0;
    let totalFollowers = 0;

    document.querySelectorAll('.item:not(.hidden)').forEach(item => {
        const platform = item.getAttribute('data-platform');
        const followers = parseInt(item.getAttribute('data-followers'), 10) || 0;
        const engajament = parseInt(item.getAttribute('data-engajament'), 10) || 0;

        totalFollowers += followers;

        if (platform.includes('youtube')) {
            youtubeFollowers += followers;
        }
        if (platform.includes('instagram')) {
            instagramFollowers += followers;
        }
        if (platform.includes('x')) {
            xViews += engajament;
        }
    });

    document.getElementById('youtube-count').textContent = (youtubeFollowers / 1000000).toFixed(1);
    document.getElementById('instagram-count').textContent = (instagramFollowers / 1000000).toFixed(1);
    document.getElementById('views-count').textContent = (xViews / 1000000000).toFixed(1);
    document.getElementById('followers-count').textContent = (totalFollowers / 1000000).toFixed(1);
}