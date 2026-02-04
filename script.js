// Rotating hero highlights
const highlights = document.querySelectorAll(".highlight");
let current = 0;

setInterval(() => {
  highlights[current].classList.remove("active");
  current = (current + 1) % highlights.length;
  highlights[current].classList.add("active");
}, 3000);

// Contact form demo handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Our team will contact you shortly.");
  this.reset();
});
