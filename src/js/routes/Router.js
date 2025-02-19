import destinationView from '../views/destination-view.js';
import homeView from '../views/home-view.js';

const Router = function () {
    const routes = {};

    const addRoute = (path, handler) => {
        routes[path] = handler;
    };

    const navigateTo = path => {
        if (!path) return;
        history.pushState({}, '', path);
        routes[path]();
    };

    const handlePopState = () => {
        const path = window.location.pathname;
        if (!path) return;
        routes[path]();
    };

    const init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', e => {
                if (e.target.matches('[data-link]')) {
                    e.preventDefault();
                    navigateTo(e.target.getAttribute('href'));
                }
            });

            window.addEventListener('popstate', handlePopState);
            handlePopState(); // Initialize on first load
        });
    };

    return { addRoute, navigateTo, init };
};

export default Router();
