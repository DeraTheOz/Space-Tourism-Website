import * as Header from '../utils/header-actions.js';
import Router from '../routes/Router.js';
import homeView from '../views/home-view.js';
import destinationView from '../views/destination-view.js';
import crewView from '../views/crew-view.js';
import technologyView from '../views/technology-view.js';

// const init = () => {
//     Header.handleMenuButtonClicks();
//     Header.handleNavLinksClick();

//     Router.addRoute('/', homeView.render);
//     Router.addRoute('/destination', destinationView.render);
//     Router.addRoute('/crew', crewView.render);
//     Router.addRoute('/technology', technologyView.render);
//     Router.init();

//     console.log('App Initialized 🚀');
// };
// init();

const init = () => {
    Header.handleMenuButtonClicks();
    Header.handleNavLinksClick();

    console.log('WINDOW', window);
    window.app = {};
    console.log('WINDOW.APP', window.app);
    app.router = Router;
    console.log('APP.ROUTER', app.router);

    window.addEventListener('DOMContentLoaded', () => {
        app.router.init();
    });
};
init();
