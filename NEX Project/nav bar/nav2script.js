const toggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.sidebar-links a');
// Toggle sidebar open/close
toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
 
// Handle active link change
links.forEach(link => {
  link.addEventListener('click', function () {
    // Remove active class from all links
    links.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    this.classList.add('active');
    // Optionally close sidebar on mobile after click
    sidebar.classList.remove('open');
  });
});

