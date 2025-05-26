// Example interactivity: Scroll reveal effect (optional)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.event');
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
  });

  window.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.style.transition = 'all 0.6s ease-out';
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  });
});
