// Add shadow to nav when page is scrolled
const nav = document.getElementById('nav');
if (!nav) return;

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });
