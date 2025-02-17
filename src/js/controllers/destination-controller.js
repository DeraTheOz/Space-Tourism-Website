import dataModel from '../models/data-model.js';

const destinationController = function () {
    const init = () => {
        const destinations = dataModel.getDestination();
        console.log(destinations);

        eventListeners();
    };

    const eventListeners = () => {
        const mainContent = document.getElementById('main');
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(navItem => {
            navItem.addEventListener('click', e => {
                const clickedLink = e.target.textContent.slice(3).toLowerCase();

                if (clickedLink === 'destination') {
                    const destinationItems = mainContent.querySelectorAll('.destination__item');
                    console.log(destinationItems);

                    destinationItems.forEach(item => {
                        item.addEventListener('click', e => {
                            if (e.target.textContent === 'Moon') {
                            }
                        });
                    });
                }
            });
        });
    };

    return { init };
};

export default destinationController();
