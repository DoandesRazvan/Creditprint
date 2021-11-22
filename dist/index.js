const navLinks = document.querySelector('.nav__menu__links__list'),
      hamburgerMenu = document.querySelector('.nav__menu__hamburger');

hamburgerMenu.addEventListener('click', () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === 'false') {
        navLinks.setAttribute('data-visible', true);

        hamburgerMenu.setAttribute('aria-expanded', true);
    } else {
        navLinks.setAttribute('data-visible', false);

        hamburgerMenu.setAttribute('aria-expanded', false);
    }
});

