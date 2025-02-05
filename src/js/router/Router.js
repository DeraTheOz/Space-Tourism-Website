// History:pushState() method
// Prevent links froms reloading the page

// const Router = function () {
//     const init = () => {
//         document.querySelectorAll('a');
//     };

//     const nav = () => {};

//     return { init };
// };

// const route = event => {
//     event = event || window.event;
//     event.preventDefault();

//     // Use the browser's history API to update the url on the browser
//     window.history.pushState({}, '', event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: '',
//     '/': '../../../index.html',
//     '/crew': '../../pages/crew/crew-commander.html',
//     '/destination': '../../pages/destination/destination-europa.html',
//     '/technology': '../../pages/technology/technology-capsule.html'
// };

// const handleLocation = async function () {
//     // Capture path name
//     const path = window.location.pathname;
//     const route = routes[path] || routes[404];

//     const html = await fetch(route).then(data => data.text());
//     document.getElementById('main-page').innerHTML = html;
// };

// handleLocation();
// window.onpopstate = handleLocation;
// window.route = route;

// export default Router();
