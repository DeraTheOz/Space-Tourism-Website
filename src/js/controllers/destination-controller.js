import dataModel from '../models/data-model.js';

const destinationController = function () {
    const init = () => {
        // const destinations = dataModel.getDestinations();
        // console.log(destinations);
    };

    const eventListeners = () => {
        const mainContent = document.getElementById('main');
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(navItem => {
            navItem.addEventListener('click', e => {
                const clickedLink = e.target.textContent.slice(3).toLowerCase();
                console.log(clickedLink);

                if (clickedLink !== 'destination') return;
                const destinationItems = mainContent.querySelector('.destination__list');
                console.log(destinationItems);

                // destinationItems.forEach(destination => {
                //     destination.addEventListener('click', () => {
                //         destinationItems.forEach(item => item.classList.remove('destination__item--active'));
                //         destination.classList.add('destination__item--active');
                //     });
                // });
            });
        });
    };

    return { init };
};

export default destinationController();
