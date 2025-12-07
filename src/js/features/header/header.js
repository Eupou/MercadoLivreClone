let logoImg = document.getElementById("logoImg")
let searchInput = document.getElementById("searchBarInput")

function updateMediaQuery() {
  if (window.matchMedia("(min-width: 800px)").matches) {
    logoImg.src = "./src/imgs/logo.webp"
    searchInput.placeholder = "Buscar produtos, marcas e muito mais"
  }
}

export function initHeader() {
  updateMediaQuery()
}
