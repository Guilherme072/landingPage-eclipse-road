document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#inicio") {
      history.replaceState(null, null, window.location.pathname);
    }
  });
  