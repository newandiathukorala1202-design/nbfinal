// Navbar scroll effect (FIXED - keeps gradient)
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



// Simple fade-in animation
window.onload = () => {
  const title = document.querySelector(".left h1");

  if (title) {
    title.style.opacity = 0;
    title.style.transform = "translateY(50px)";

    setTimeout(() => {
      title.style.transition = "all 1s ease";
      title.style.opacity = 1;
      title.style.transform = "translateY(0)";
    }, 300);
  }
};

// Smooth link click effect
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function () {
    document.body.style.opacity = "0.95";
  });
});

const sections = document.querySelectorAll(".scroll-section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

