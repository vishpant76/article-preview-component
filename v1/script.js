const card = document.querySelector("article");
const shareBar = document.querySelector(".footer-share");
const shareBtn = document.querySelector(".share-btn");

card.addEventListener("click", () => {
  shareBar.classList.toggle("hidden");
  shareBtn.classList.toggle("active");
});
