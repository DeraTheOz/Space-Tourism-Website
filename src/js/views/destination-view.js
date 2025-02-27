import dataModel from '../models/data-model.js';
import imageMoonPng from '../../assets/destination/image-moon.png';
import imageMoonWebp from '../../assets/destination/image-moon.webp';
import imageMarsPng from '../../assets/destination/image-mars.png';
import imageMarsWebp from '../../assets/destination/image-mars.webp';
import imageEuropaPng from '../../assets/destination/image-europa.png';
import imageEuropaWebp from '../../assets/destination/image-europa.webp';
import imageTitanPng from '../../assets/destination/image-titan.png';
import imageTitanWebp from '../../assets/destination/image-titan.webp';

const images = {
    moon: { png: imageMoonPng, webp: imageMoonWebp },
    mars: { png: imageMarsPng, webp: imageMarsWebp },
    europa: { png: imageEuropaPng, webp: imageEuropaWebp },
    titan: { png: imageTitanPng, webp: imageTitanWebp }
};

const destinations = dataModel.getDestinations();

const destinationView = function () {
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('.lazy-img');

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const source = img.previousElementSibling;

                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }

                        if (
                            source &&
                            source.tagName === 'SOURCE' &&
                            source.dataset.srcset
                        ) {
                            source.srcset = source.dataset.srcset;
                            source.removeAttribute('data-srcset');
                        }

                        observer.unobserve(img);
                    }
                });
            },
            { rootMargin: '200px' }
        );

        images.forEach((img) => observer.observe(img));
    };

    const render = (destinationName = 'moon') => {
        const main = document.querySelector('main');
        const destinationContainer = document.querySelector(
            '.destination__container'
        );

        const destination =
            destinations[destinationName.toLowerCase()] || destinations['moon'];

        document.body.className = 'destination';

        if (!destinationContainer) {
            // document.body.className = 'destination';

            main.innerHTML = `
            <section class="destination__hero">
                <p class="destination__intro"><span class="destination__step">01</span> Pick your destination</p>
                
                <div class="destination__container">
                    ${destinationContent(destination, destinationName)}
                </div>
            </section>`;

            lazyLoadImages();
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
                <picture>
                    <source data-srcset="${
                        images[destinationName].webp
                    }" type="image/webp" />
                    <img class="destination__image lazy-img"
                        data-src="${images[destinationName].png}"
                        alt="${destination.name}"
                        loading="lazy"
                    />
                </picture>
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
