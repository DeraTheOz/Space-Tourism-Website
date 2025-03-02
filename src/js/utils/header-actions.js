export const handleMenuButtonClicks = () => {
    const openButton = document.getElementById('open');
    const closeButton = document.getElementById('close');
    const nav = document.querySelector('.header__nav');

    const showNav = () => {
        nav.classList.add('open');
        openButton.hidden = true;
        closeButton.hidden = false;
        document.addEventListener('click', handleOutsideClick);
    };

    const hideNav = () => {
        nav.classList.remove('open');
        openButton.hidden = false;
        closeButton.hidden = true;
        document.addEventListener('click', handleOutsideClick);
    };

    const handleOutsideClick = (event) => {
        const isClickedInsideNav = nav.contains(event.target);
        const isClickedOnButton =
            openButton.contains(event.target) ||
            closeButton.contains(event.target);

        if (!isClickedInsideNav && !isClickedOnButton) hideNav();
    };

    openButton.addEventListener('click', showNav);
    closeButton.addEventListener('click', hideNav);
};

export const handleNavLinksClick = () => {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            navLinks.forEach((item) => item.classList.remove('active'));
            navItem.classList.add('active');
        });
    });

    updateActiveLink();
    window.addEventListener('popstate', updateActiveLink);
};

export const updateActiveLink = () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const currentPath = window.location.pathname;

    navLinks.forEach((item) => {
        const navItem = item.firstElementChild.getAttribute('href');
        item.classList.toggle('active', navItem === currentPath);
    });
};
