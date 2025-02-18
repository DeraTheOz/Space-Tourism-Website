// import { renderDestination } from '../views/destination.js';
import { renderHome } from '../views/home.js';

import destinationView from '../views/destination.js';
// const renderDestination = destinationView.renderDestination('moon');
// console.log(renderDestination());

const routes = {
    '/': {
        view: renderHome,
        className: 'home'
    },

    '/destination': {
        view: destinationView.renderDestination,
        // view: destinationView,
        className: 'destination'
    }
};

const navigateTo = function (path) {
    history.pushState({}, '', path);
    updateView();
};

const updateView = function () {
    const route = routes[window.location.pathname] || routes['/'];

    document.getElementById('main').innerHTML = route.view('moon');
    document.body.className = route.className;

    // destinationView();
};

export const initRoutes = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-route]')) {
                e.preventDefault();

                navigateTo(e.target.getAttribute('href'));
            }
        });

        window.addEventListener('popstate', updateView);
        updateView(); // Load initial page
    });
};
