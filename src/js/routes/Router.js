import * as Header from '../utils/header-actions.js';
import errorView from '../views/error-view.js';
import homeView from '../views/home-view.js';
import destinationView from '../views/destination-view.js';
import crewView from '../views/crew-view.js';
import technologyView from '../views/technology-view.js';

const error404 = errorView.render;
const home = homeView.render;
const destination = destinationView.render;
const crew = crewView.render;
const technology = technologyView.render;

const Router = function () {
    const routes = {
        '/404': error404,
        '/': home,
        '/destination': destination,
        '/crew': crew,
        '/technology': technology
    };

    const init = () => {
        // handleUrlPath(); // Initialize on first load
        Header.handleMenuButtonClicks();
        Header.handleNavLinksClick();

        document.body.addEventListener('click', (e) => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                const url = link.getAttribute('href');
                navigateTo(url);
            }
        });

        window.addEventListener('popstate', (e) => {
            const path = e.state?.route || window.location.pathname;
            navigateTo(routes.hasOwnProperty(path) ? path : '/404', false);
        });
    };

    // const handleUrlPath = () => {
    //     const url = window.location.pathname;

    //     if (routes[url]) {
    //         history.replaceState({ route: url }, null, url);
    //         routes[url]();
    //     } else {
    //         navigateTo('/404');
    //     }
    // };

    const handleUrlPath = () => {
        const url = window.location.pathname;

        if (routes[url]) {
            history.replaceState({ route: url }, null, url);

            // Skip re-rendering homepage
            if (url === '/' && document.body.classList.contains('home')) return;

            routes[url]();
        } else {
            navigateTo('/404');
        }
    };

    const navigateTo = (route, addToHistory = true) => {
        if (!routes[route]) route = '/404';

        if (addToHistory) {
            history.pushState({ route }, null, route);
        }

        routes[route]();
        Header.updateActiveLink();
    };

    return { init, navigateTo };
};

export default Router();
