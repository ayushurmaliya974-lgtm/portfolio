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
/* ================= COPY EMAIL ================= */

const copyEmail = document.getElementById('copyEmail');

if (copyEmail) {
  copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('ayushurmaliya@gmail.com');
    copyEmail.innerText = 'Email copied ✔';
    setTimeout(() => {
      copyEmail.innerText = 'ayushurmaliya@gmail.com';
    }, 2000);
  });
}
