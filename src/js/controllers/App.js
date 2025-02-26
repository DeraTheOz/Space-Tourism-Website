import Router from '../routes/Router.js';

const init = () => {
    // Route to destination
    const exploreBtn = document.querySelector('.hero__btn');
    exploreBtn.addEventListener('click', () => {
        Router.navigateTo('/destination');
    });

    window.addEventListener('DOMContentLoaded', () => {
        Router.init();
    });
};
init();
