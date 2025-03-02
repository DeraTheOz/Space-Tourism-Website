import dataModel from '../models/data-model.js';
import imageMoon from '../../assets/destination/image-moon.avif';
import imageMars from '../../assets/destination/image-mars.avif';
import imageEuropa from '../../assets/destination/image-europa.avif';
import imageTitan from '../../assets/destination/image-titan.avif';

const images = {
    moon: imageMoon,
    mars: imageMars,
    europa: imageEuropa,
    titan: imageTitan
};

const destinations = dataModel.getDestinations();

const destinationView = function () {
    const render = (destinationName = 'moon') => {
        const main = document.querySelector('main');
        const destinationContainer = document.querySelector(
            '.destination__container'
        );

        const destination =
            destinations[destinationName.toLowerCase()] || destinations['moon'];

        if (!destinationContainer) {
            document.body.className = 'destination';

            main.innerHTML = `
            <section class="destination__hero">
                <p class="destination__intro"><span class="destination__step">01</span> Pick your destination</p>
                
                <div class="destination__container">
                    ${destinationContent(destination, destinationName)}
                </div>
            </section>`;
            return;
        }

        // Fade out, update content and fade back in
        destinationContainer.classList.add('fade-out');
        setTimeout(() => {
            destinationContainer.innerHTML = destinationContent(
                destination,
                destinationName
            );
            destinationContainer.classList.remove('fade-out');
        }, 500);
    };

    const destinationContent = function (destination, destinationName) {
        return `
            <div class="destination__image--box">
                <img class="destination__image"
                    src="${images[destinationName]}"
                    alt="${destination.name}"
                />
            </div>
        
            <div class="destination__details">
                <ul class="destination__list">${Object.values(destinations)
                    .map(
                        (dest) => `
                        <li class="destination__item ${
                            dest.name.toLowerCase() ===
                            destinationName.toLowerCase()
                                ? 'active'
                                : ''
                        }" data-destination="${dest.name.toLowerCase()}">
                                ${dest.name}
                        </li>`
                    )
                    .join('')}
                </ul>
        
                <h1 class="destination__title">${destination.name}</h1>
                    <p class="destination__summary">${destination.description}
                    </p>
        
                    <div class="summary__line"></div>
        
                    <div class="destination__statistics">
                        <p class="destination__distance">Avg. distance 
                            <span>${destination.distance}</span> 
                        </p>
                        <p class="destination__time">Est. travel time 
                            <span>${destination.travel}</span> 
                        </p>
                    </div>
            </div>
        `;
    };

    (function handledDestinationClick() {
        document.querySelector('main').addEventListener('click', (e) => {
            if (!e.target.classList.contains('destination__item')) return;

            const selectedDestination = e.target.dataset.destination;
            if (!selectedDestination) return;

            render(selectedDestination);
        });
    })();

    return { render };
};

export default destinationView();
