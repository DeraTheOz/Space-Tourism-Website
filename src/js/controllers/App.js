import * as Header from '../utils/header-actions.js';
import { initRoutes } from '../routes/Router.js';

import destinationController from './destination-controller.js';

const init = () => {
    Header.handleMenuButtonClicks();
    Header.handleNavLinksClick();

    initRoutes();

    destinationController.init();
};
init();
