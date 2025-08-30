// ===== Main JS Using Utils.js =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

// Hamburger Menu Toggle
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';
navbar.appendChild(hamburger);

hamburger.addEventListener('click', () => {
  Utils.toggleClass(navLinks, 'active');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    Utils.scrollToElement(link.getAttribute('href'));
  });
});

// Hero Text Animation
const heroText = document.querySelectorAll('.hero-content h1, .hero-content p');
heroText.forEach((el, index) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  setTimeout(() => {
    el.style.transition = 'all 0.8s ease-out';
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  }, index * 300);
});
