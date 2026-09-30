(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (toggle && navigation) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      navigation.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 701px)').matches) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
