/* ================= SCROLL ANIMATION ================= */

const animatedSections = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.3,
  }
);

animatedSections.forEach((section) => {
  observer.observe(section);
});

const toggleBtn = document.getElementById('contactToggle');
const form = document.getElementById('contactForm');

if (toggleBtn && form) {
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('show');
  });
}

