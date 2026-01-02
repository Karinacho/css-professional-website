const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    const navOpened = navToggle.getAttribute('aria-expanded') === 'true';

    if (navOpened) {
        navToggle.setAttribute('aria-expanded', 'false');
    } else {
        navToggle.setAttribute('aria-expanded', 'true');
    }


})