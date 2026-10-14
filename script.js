/* JW Legacy Enterprises — lightweight navigation and contact helpers */
(() => {
  'use strict';

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-navigation');
  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
      menu.textContent = '☰';
      document.body.classList.remove('nav-open');
    };
    menu.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      if (open) {
        nav.classList.add('open');
        menu.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-label', 'Close navigation');
        menu.textContent = '✕';
        document.body.classList.add('nav-open');
      } else closeMenu();
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { closeMenu(); menu.focus(); }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const copy = document.getElementById('copy-email');
  const status = document.getElementById('copy-status');
  if (copy && status) {
    copy.addEventListener('click', async () => {
      const value = copy.getAttribute('data-email') || 'jwlegacyenterprises@gmail.com';
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(value);
        status.textContent = 'Email address copied. You can paste it into any email app.';
      } catch (_) {
        status.textContent = 'Copy not available in this browser. Select the email address above to copy it manually.';
      }
    });
  }
})();
