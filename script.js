// Smooth scroll to sections
document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Dark mode toggle (for future use)
// const toggle = document.getElementById("toggle-theme");
// toggle?.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });
