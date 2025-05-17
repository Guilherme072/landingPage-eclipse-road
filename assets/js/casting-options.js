function toggleOptions() {
    document.getElementById("optionsMenu").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.closest('.button-casting')) {
      var optionsMenu = document.getElementById("optionsMenu");
      optionsMenu.classList.remove('show');
    }
  }