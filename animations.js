// Smooth reveal on scroll (simple version)
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
