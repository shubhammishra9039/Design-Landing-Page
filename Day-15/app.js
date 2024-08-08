const searchElement = document.querySelector(".search-bar-container");
const maginfireEl = document.querySelector(".ri-search-eye-line");

maginfireEl.addEventListener("click", () => {
  searchElement.classList.toggle("active");
});
