function updateMediaQuery() {
  let logoImg = document.getElementById("logoImg")
  let searchInput = document.getElementById("searchBarInput")
  if (window.matchMedia("(min-width: 800px)").matches) {
    logoImg.src = "./imgs/logo.webp"
    searchInput.placeholder = "Buscar produtos, marcas e muito mais"
  }
}

updateMediaQuery()
