'use strict';
const phone = '5562998230185';
document.querySelectorAll('[data-wa]').forEach(link => {
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(link.dataset.wa)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(other => {
    const active = other === button;
    other.classList.toggle('active', active);
    other.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(item => {
    item.hidden = button.dataset.filter !== 'todos' && item.dataset.category !== button.dataset.filter;
    if (!item.hidden) count++;
  });
  document.querySelector('.menu-featured').hidden = !Array.from(document.querySelectorAll('.menu-featured article')).some(item => !item.hidden);
  document.querySelector('#filter-status').textContent = `${count} opções em ${button.textContent}.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
