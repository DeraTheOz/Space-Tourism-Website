import { renderDestination } from '../views/destination.js';
import { renderHome } from '../views/home.js';

const routes = {
    '/': {
        view: renderHome,
        className: 'home'
    },

    '/destination': {
        view: renderDestination,
        className: 'destination'
    }
};

const navigateTo = function (path) {
    history.pushState({}, '', path);
    updateView();
};

const updateView = function () {
    const route = routes[window.location.pathname] || routes['/'];
    

    document.getElementById('main').innerHTML = route.view();
    document.body.className = route.className;
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
