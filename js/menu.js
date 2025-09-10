const navSection = document.getElementById('nav-section');
const navLinks = document.getElementById('nav-links');

navSection.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});