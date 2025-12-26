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

//Contact Form Toggle
    const contactToggle = document.getElementById('contactToggle');
    const contactForm = document.getElementById('contactForm');

    contactToggle.addEventListener('click', (e) => {
      e.preventDefault();
      contactForm.classList.toggle('show');
      
      if (contactForm.classList.contains('show')) {
        contactToggle.textContent = 'Hide Form';
        setTimeout(() => {
          contactForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        contactToggle.textContent = 'Get In Touch';
      }
 });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });


