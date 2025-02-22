import dataModel from '../models/data-model.js';
import imgVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import imgVehicleTablet from '../../assets/technology/image-launch-vehicle-tablet.jpg';
import imgVehicleMobile from '../../assets/technology/image-launch-vehicle-mobile.jpg';
import imgSpaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import imgSpaceportTablet from '../../assets/technology/image-spaceport-tablet.jpg';
import imgSpaceportMobile from '../../assets/technology/image-spaceport-mobile.jpg';
import imgCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import imgCapsuleTablet from '../../assets/technology/image-space-capsule-tablet.jpg';
import imgCapsuleMobile from '../../assets/technology/image-space-capsule-mobile.jpg';

import camelCaseName from '../utils/camelCase.js';

const images = {
    launchVehicle: {
        portrait: imgVehiclePortrait,
        tablet: imgVehicleTablet,
        mobile: imgVehicleMobile
    },
    spaceport: {
        portrait: imgSpaceportPortrait,
        tablet: imgSpaceportTablet,
        mobile: imgSpaceportMobile
    },
    spaceCapsule: {
        portrait: imgCapsulePortrait,
        tablet: imgCapsuleTablet,
        mobile: imgCapsuleMobile
    }
};

const technologyView = function () {
    const technology = dataModel.getTechnology();

    const render = function (techName = 'launchVehicle') {
        const main = document.querySelector('main');
        const techContainer = document.querySelector('.technology__container');

        const techPerson = technology[techName] || technology['launchVehicle'];

        if (!techContainer) {
            document.body.className = 'technology';

            main.innerHTML = `
                <section class="technology__hero">
                    <p class="technology__intro"><span class="technology__step">03</span> Space launch 101</p>
                    <div class="technology__container">
                        ${technologyContent(technology, techName)}
                    </div>
                </section>
            `;
            return;
        }

        // Fade out, update content and fade back in
        techContainer.classList.add('fade-out');
        setTimeout(() => {
            techContainer.innerHTML = technologyContent(technology, techName);
            techContainer.classList.remove('fade-out');
        }, 500);
    };

    const technologyContent = function (technology, techName) {
        const member = technology[techName];

        return `
            <div class="technology__details">
                <ul class="technology__slides">${Object.values(technology)
                    .map(
                        (tech, i) => `
                        <li class="technology__slide ${
                            camelCaseName(tech) === techName ? 'active' : ''
                        }"
                        data-number=${camelCaseName(tech)}>
                            ${i + 1} 
                        </li>
                    `
                    )
                    .join('')}
                </ul>

                <div class="technology__details--box">
                    <p class="technology__role">The terminology...</p>
                    <h1 class="technology__name">${member.name}</h1>
                    <p class="technology__summary">
                        ${member.description}
                    </p>
                </div>
            </div>
            <div class="technology__image--box">
                <picture>
                    <source
                        srcset="${images[techName].mobile}"
                        type="image/jpg"
                        media="(max-width: 37.5em)"
                    />
                    <source
                        srcset="${images[techName].tablet}"
                        type="image/jpg"
                        media="(max-width: 68.75em)"
                    />

                    <img
                        class="technology__image"
                        src="${images[techName].portrait}"
                        alt="${member.name}"
                    />
                </picture>
            </div>
            `;
    };

    (function handleTechSwitch() {
        document.querySelector('main').addEventListener('click', (e) => {
            if (!e.target.classList.contains('technology__slide')) return;

            const selectedTech = e.target.dataset.number;
            if (!selectedTech) return;

            render(selectedTech);
        });
    })();

    return { render };
};

export default technologyView();
