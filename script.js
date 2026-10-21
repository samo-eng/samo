const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
}), { threshold: 0.10 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const quoteForm = document.getElementById('quoteForm');
const formNote = document.getElementById('formNote');
quoteForm?.addEventListener('submit', event => {
  event.preventDefault();
  formNote.textContent = 'Frontend demo: the form is valid. Connect it to your hosting provider, Formspree, Netlify Forms or your own backend before launch.';
  formNote.style.color = '#94132f';
});
