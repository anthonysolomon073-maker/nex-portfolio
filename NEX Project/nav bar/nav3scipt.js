const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navBar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Add/remove solid background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navBar.classList.remove('transparent');
    navBar.classList.add('solid');
  } else {
    navBar.classList.add('transparent');
    navBar.classList.remove('solid');
  }
});

// Active link switching
navItems.forEach(link => {
  link.addEventListener('click', function () {
    navItems.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    navLinks.classList.remove('show'); // close menu on click (mobile)
  });
});
