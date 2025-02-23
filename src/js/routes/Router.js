// const Router = function () {
//     const routes = {};

//     const addRoute = (path, handler) => {
//         routes[path] = handler;
//     };

//     const navigateTo = (path) => {
//         if (!path) return;
//         history.pushState({}, '', path);
//         routes[path]();
//     };

//     const handlePopState = () => {
//         const path = window.location.pathname;
//         if (!path) return;
//         routes[path]();
//     };

//     const init = () => {
//         document.addEventListener('DOMContentLoaded', () => {
//             document.body.addEventListener('click', (e) => {
//                 if (e.target.matches('[data-link]')) {
//                     e.preventDefault();
//                     navigateTo(e.target.getAttribute('href'));
//                 }
//             });

//             window.addEventListener('popstate', handlePopState);
//             handlePopState(); // Initialize on first load
//         });
//     };

//     return { addRoute, navigateTo, init };
// };

// export default Router();

/**
 * Handles navigation between pages
 * addToHistory  keeps track of routes for forward and backwards button clicks
 */

import homeView from '../views/home-view.js';
import destinationView from '../views/destination-view.js';
import crewView from '../views/crew-view.js';
import technologyView from '../views/technology-view.js';

console.log('HOME VIEW', homeView.render);

const Router = function () {
    const routes = {
        '/': homeView.render,
        '/destination': destinationView.render,
        '/crew': crewView.render,
        '/technology': technologyView.render
    };

    // const urlLocationHandler = () => {
    //     const location = window.location.pathname;
    //     console.log('LOCATION', location);
    // };

    const init = () => {
        document.body.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                const url = e.target.getAttribute('href');
                console.log('URL', url);
                navigateTo(url);
                console.log('ROUTE', routes);
            }
        });

        window.addEventListener('popstate', (e) => {
            console.log('E.STATE.ROUTE', e.state.route);
            navigateTo(e.state.route, false);
        });
    };

    const navigateTo = (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, null, route);
            console.log('ROUTE', route, addToHistory);
        }

        switch (route) {
            case '/':
                // code
                break;

            case '/destination':
                // code
                break;

            case '/crew':
                // code
                break;

            case '/technology':
                // code
                break;
        }
    };

    return { init };
};

export default Router();
