// Highlight nav link when scrolling
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      const id = sec.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
      document.querySelector(`.nav-links a[href*=${id}]`).classList.add('active');
    }
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});