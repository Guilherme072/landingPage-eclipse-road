let ordemOriginal = [];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#conteudo");
  ordemOriginal = Array.from(container.children).map(el => el.cloneNode(true));
});

function normalizarSeguidores(texto) {
  texto = texto.toLowerCase().replace(/\s/g, "");

  if (texto.includes("mil")) {
    return parseFloat(texto.replace("mil", "").replace(",", ".")) * 1000;
  }

  if (texto.includes("k")) {
    return parseFloat(texto.replace("k", "").replace(",", ".")) * 1000;
  }

  if (texto.includes("m")) {
    return parseFloat(texto.replace("m", "").replace(",", ".")) * 1000000;
  }

  return parseInt(texto.replace(/[^\d]/g, ""));
}

function ordenarInfluencers() {
  const criterio = document.getElementById("ordenar").value;
  const container = document.querySelector("#conteudo");

  let cards;

  if (criterio === "") {
    cards = ordemOriginal.map(card => card.cloneNode(true));
  } else {
    cards = Array.from(container.children);

    cards.sort((a, b) => {
      const nomeA = a.querySelector(".profile-name").textContent.toLowerCase();
      const nomeB = b.querySelector(".profile-name").textContent.toLowerCase();
      const seguidoresA = normalizarSeguidores(a.querySelector(".seguidores").textContent);
      const seguidoresB = normalizarSeguidores(b.querySelector(".seguidores").textContent);

      switch (criterio) {
        case "nome-asc":
          return nomeA.localeCompare(nomeB);
        case "nome-desc":
          return nomeB.localeCompare(nomeA);
        case "seguidores-asc":
          return seguidoresA - seguidoresB;
        case "seguidores-desc":
          return seguidoresB - seguidoresA;
        default:
          return 0;
      }
    });
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  cards.forEach(card => container.appendChild(card));
}