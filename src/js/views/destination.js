import dataModel from '../models/data-model.js';
import imageMoon from '../../assets/destination/image-moon.webp';
import imageMars from '../../assets/destination/image-mars.webp';
import imageEuropa from '../../assets/destination/image-europa.webp';
import imageTitan from '../../assets/destination/image-titan.webp';

const destinationView = () => {
    const destinations = dataModel.newDestinations();
    // const destinationContainer = document.querySelector('.destination__container');

    const parent = document.getElementById('main');
    const destinationContainer = parent.querySelector('.destination__container');
    // console.log(destinationContainer);

    // Map images by name for easy access
    const images = {
        moon: imageMoon,
        mars: imageMars,
        europa: imageEuropa,
        titan: imageTitan
    };

    // Helper to render destination dynamically
    const renderDestination = destName => {
        // const destinationContainer = document.querySelector('.destination__container');
        // console.log(parent.closest);

        const dest = destinations[destName];
        if (!dest) return; // Fail-safe if invalid name

        const markup = `
            <section class="destination__hero">
                <p class="destination__intro"><span class="destination__step">01</span> Pick your destination</p>
                <div class="destination__image--box">
                    <img class="destination__image"
                        src="${images[destName]}"
                        alt="${dest.name}" 
                    />
                </div>
                <div class="destination__details">
                    <ul class="destination__list">
                        ${Object.keys(destinations)
                            .map(
                                name => `
                                <li class="destination__item ${name === destName ? 'active' : ''}"
                                    data-destination="${name}">
                                    ${name.charAt(0).toUpperCase() + name.slice(1)}
                                </li>
                            `
                            )
                            .join('')}
                    </ul>
                    <h1 class="destination__title">${dest.name}</h1>
                    <p class="destination__summary">${dest.description}</p>
                    
                    <div class="summary__line"></div>
                    
                    <div class="destination__statistics">
                        <p class="destination__distance">Avg. distance <span>${dest.distance}</span></p>
                        <p class="destination__time">Est. travel time <span>${dest.travel}</span></p>
                    </div>
                </div>
            </section>
        `;
        parent.insertAdjacentHTML('afterbegin', markup);
        return markup;
    };

    // Initial render (defaults to Moon)
    // renderDestination('moon');

    // Event delegation for dynamic click handling
    parent.addEventListener('click', e => {
        const clickedItem = e.target.closest('.destination__item');
        if (!clickedItem) return;

        const destName = clickedItem.dataset.destination;
        if (destinations[destName]) {
            renderDestination(destName);
        }
    });

    return { renderDestination };
};
export default destinationView();

////////////////////
// export const destinationView = () => {
//     const destinations = dataModel.newDestinations();
//     const destinationContainer = document.querySelector('.destination__container');
//     const { moon, mars, europa, titan } = destinations;

//     const destinationItems = document.querySelectorAll('.destination__item');
//     if (destinationItems.length === 0) return;

//     destinationItems.forEach(destination => {
//         destination.addEventListener('click', e => {
//             destinationItems.forEach(item => item.classList.remove('active'));
//             destination.classList.add('active');

//             const clickedItem = e.target.textContent.toLowerCase();

//             switch (clickedItem) {
//                 case 'moon':
//                     renderMoon(moon);
//                     break;
//                 case 'mars':
//                     renderMars(mars);
//                     break;
//                 case 'europa':
//                     renderEuropa(europa);
//                     break;
//                 case 'titan':
//                     renderTitan(titan);
//                     break;
//             }
//         });
//     });

//     const renderMoon = dest => {
//         destinationContainer.innerHTML = '';

//         const markup = `
//             <div class="destination__image--box">
//                 <img class="destination__image"
//                   src="${imageMoon}"
//                     alt="${dest.name}"
//                 />
//                 </div>
//                 <div class="destination__details">
//                     <ul class="destination__list">
//                         <li class="destination__item active">Moon</li>
//                         <li class="destination__item">Mars</li>
//                         <li class="destination__item">Europa</li>
//                         <li class="destination__item">Titan</li>
//                     </ul>

//                 <h1 class="destination__title">Moon</h1>
//                 <p class="destination__summary">
//                     ${dest.description}
//                 </p>

//                 <div class="summary__line"></div>

//                 <div class="destination__statistics">
//                     <p class="destination__distance">Avg. distance
//                     <span>${dest.distance}</span></p>
//                     <p class="destination__time">Est. travel time
//                     <span>${dest.travel}</span></p>
//                 </div>
//             </div>
//         `;

//         destinationContainer.insertAdjacentHTML('afterbegin', markup);
//     };

//     const renderMars = dest => {
//         destinationContainer.innerHTML = '';

//         const markup = `
//             <div class="destination__image--box">
//                 <img class="destination__image"
//                   src="${imageMars}"
//                     alt="${dest.name}"
//                 />
//                 </div>
//                 <div class="destination__details">
//                     <ul class="destination__list">
//                         <li class="destination__item">Moon</li>
//                         <li class="destination__item active">Mars</li>
//                         <li class="destination__item">Europa</li>
//                         <li class="destination__item">Titan</li>
//                     </ul>

//                 <h1 class="destination__title">Mars</h1>
//                 <p class="destination__summary">
//                     ${dest.description}
//                 </p>

//                 <div class="summary__line"></div>

//                 <div class="destination__statistics">
//                     <p class="destination__distance">Avg. distance
//                     <span>${dest.distance}</span></p>
//                     <p class="destination__time">Est. travel time
//                     <span>${dest.travel}</span></p>
//                 </div>
//             </div>
//         `;

//         destinationContainer.insertAdjacentHTML('afterbegin', markup);
//     };

//     const renderEuropa = dest => {
//         destinationContainer.innerHTML = '';

//         const markup = `
//             <div class="destination__image--box">
//                 <img class="destination__image"
//                   src="${imageEuropa}"
//                     alt="${dest.name}"
//                 />
//                 </div>
//                 <div class="destination__details">
//                     <ul class="destination__list">
//                         <li class="destination__item">Moon</li>
//                         <li class="destination__item">Mars</li>
//                         <li class="destination__item active">Europa</li>
//                         <li class="destination__item">Titan</li>
//                     </ul>

//                 <h1 class="destination__title">Europa</h1>
//                 <p class="destination__summary">
//                     ${dest.description}
//                 </p>

//                 <div class="summary__line"></div>

//                 <div class="destination__statistics">
//                     <p class="destination__distance">Avg. distance
//                     <span>${dest.distance}</span></p>
//                     <p class="destination__time">Est. travel time
//                     <span>${dest.travel}</span></p>
//                 </div>
//             </div>
//         `;

//         destinationContainer.insertAdjacentHTML('afterbegin', markup);
//     };

//     const renderTitan = dest => {
//         destinationContainer.innerHTML = '';

//         const markup = `
//             <div class="destination__image--box">
//                 <img class="destination__image"
//                   src="${imageTitan}"
//                     alt="${dest.name}"
//                 />
//                 </div>
//                 <div class="destination__details">
//                     <ul class="destination__list">
//                         <li class="destination__item">Moon</li>
//                         <li class="destination__item">Mars</li>
//                         <li class="destination__item">Europa</li>
//                         <li class="destination__item active">Titan</li>
//                     </ul>

//                 <h1 class="destination__title">Titan</h1>
//                 <p class="destination__summary">
//                     ${dest.description}
//                 </p>

//                 <div class="summary__line"></div>

//                 <div class="destination__statistics">
//                     <p class="destination__distance">Avg. distance
//                     <span>${dest.distance}</span></p>
//                     <p class="destination__time">Est. travel time
//                     <span>${dest.travel}</span></p>
//                 </div>
//             </div>
//         `;

//         destinationContainer.insertAdjacentHTML('afterbegin', markup);
//     };
// };

// export function renderDestination() {
//     const destinations = dataModel.getDestinations();
//     let currentDestinationIndex = 0; // Default to Moon

//     // Helper function to render content
//     function updateDestination(index) {
//         const destination = destinations[index];

//         // Update image (with fallback for webp and png)
//         document.querySelector('.destination__image').src = destination.images.webp || destination.images.png;
//         document.querySelector('.destination__image').alt = destination.name;

//         // Update title, description, distance, and time
//         document.querySelector('.destination__title').textContent = destination.name;
//         document.querySelector('.destination__summary').textContent = destination.description;
//         document.querySelector('.destination__distance').textContent = destination.distance;
//         document.querySelector('.destination__time').textContent = destination.travel;

//         // Update active state
//         document.querySelectorAll('.destination__item').forEach((item, idx) => {
//             item.classList.toggle('destination__item--active', idx === index);
//         });

//         // Update current index
//         currentDestinationIndex = index;
//     }

//     // Initial HTML structure (renders Moon by default)
//     const initialMarkup = `
//         <section class="destination__hero">
//             <p class="destination__intro"><span class="destination__step">01</span> Pick your destination</p>
//             <div class="destination__container">
//                 <div class="destination__image--box">
//                     <img class="destination__image" src="${imageMoon}" alt="${destinations[0].name}">
//                 </div>
//                 <div class="destination__details">
//                     <ul class="destination__list">
//                         <li class="destination__item active">Moon</li>
//                         <li class="destination__item">Mars</li>
//                         <li class="destination__item">Europa</li>
//                         <li class="destination__item">Titan</li>
//                     </ul>
//                     <h1 class="destination__title">${destinations[0].name}</h1>
//                     <p class="destination__summary">${destinations[0].description}</p>

//                     <div class="destination__statistics">
//                         <p class="destination__distance">Avg. distance <span>${destinations[0].distance}</span></p>
//                         <p class="destination__time">Est. travel time
//                         <span>${destinations[0].travel}</span></p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   `;

//     // Inject content into the main container
//     document.getElementById('main').innerHTML = initialMarkup;

//     // Handle destination switch using event delegation
//     document.querySelector('.destination__list').addEventListener('click', e => {
//         if (e.target.classList.contains('destination__item')) {
//             const index = parseInt(e.target.dataset.index, 10);
//             if (index !== currentDestinationIndex) {
//                 updateDestination(index);
//             }
//         }
//     });

//     // Return the initial content
//     return initialMarkup;
// }
