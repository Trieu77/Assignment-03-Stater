document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const detail = this.closest(".career-box").querySelector(".toggle-content");
    const isHidden = detail.classList.contains("hidden");

    detail.classList.toggle("hidden");
    this.textContent = isHidden ? "View Less" : "View More";
  });
});
