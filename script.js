const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backdrop = document.querySelector('.menu-backdrop');

function setMenu(open) {
  nav?.classList.toggle('open', open);
  backdrop?.classList.toggle('show', open);
  menuToggle?.classList.toggle('active', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuToggle?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
backdrop?.addEventListener('click', () => setMenu(false));
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('resize', () => { if (window.innerWidth > 980) setMenu(false); });

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) { setMenu(false); menuToggle?.focus(); }
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 8% 0px' })
  : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Links "Início" e logo: o #inicio fica no header fixo, então levamos ao topo da página explicitamente
document.querySelectorAll('a[href="#inicio"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  history.replaceState(null, '', location.pathname + location.search);
}));
