let leftButton = document.getElementById("leftButton")
let rightButton = document.getElementById("rightButton")
let carouselContainer = document.getElementsByClassName("cards-container")[0]
let carouselWidth = carouselContainer.offsetWidth

let totalPages = 3
let firstPage = 1
let lastPage = totalPages
let currentPage = 1
let move = 0

function toggleRightButton() {
  if (currentPage == lastPage) {
    rightButton.classList.add("isHidden")
  } else {
    rightButton.classList.remove("isHidden")
  }
}

function toggleLeftButton() {
  if (currentPage == firstPage) {
    leftButton.classList.add("isHidden")
  } else {
    leftButton.classList.remove("isHidden")
  }
}

function moveLeftToRight() {
  if (currentPage > firstPage) {
    move = move + carouselWidth
    carouselContainer.style.transform = `translateX(${move}px)`
    currentPage--
    toggleLeftButton()
    toggleRightButton()
  }
}

function moveRightToLeft() {
  if (currentPage < lastPage) {
    move = move - carouselWidth
    carouselContainer.style.transform = `translateX(${move}px)`
    currentPage++
    toggleLeftButton()
    toggleRightButton()
  }
}

export function carousel() {
  leftButton.addEventListener("click", () => moveLeftToRight())
  rightButton.addEventListener("click", () => moveRightToLeft())
}
