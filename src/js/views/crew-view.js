import dataModel from '../models/data-model.js';
import imageDouglasPng from '../../assets/crew/image-douglas-hurley.png';
import imageDouglasWebp from '../../assets/crew/image-douglas-hurley.webp';
import imageMarkPng from '../../assets/crew/image-mark-shuttleworth.png';
import imageMarkWebp from '../../assets/crew/image-mark-shuttleworth.webp';
import imageVictorPng from '../../assets/crew/image-victor-glover.png';
import imageVictorWebp from '../../assets/crew/image-victor-glover.webp';
import imageAnoushehPng from '../../assets/crew/image-anousheh-ansari.png';
import imageAnoushehWebp from '../../assets/crew/image-anousheh-ansari.webp';

import camelCaseName from '../utils/camelCase.js';

const images = {
    douglasHurley: { png: imageDouglasPng, webp: imageDouglasWebp },
    markShuttleworth: { png: imageMarkPng, webp: imageMarkWebp },
    victorGlover: { png: imageVictorPng, webp: imageVictorWebp },
    anoushehAnsari: { png: imageAnoushehPng, webp: imageAnoushehWebp }
};

const crewView = function () {
    const crew = dataModel.getCrew();

    const render = (crewName = 'douglasHurley') => {
        const main = document.querySelector('main');
        const crewContainer = document.querySelector('.crew__container');

        const crewMember = crew[crewName] || crew['douglasHurley'];

        if (!crewContainer) {
            document.body.className = 'crew';

            main.innerHTML = `
            <section class="crew__hero">
                <p class="crew__intro"><span class="crew__step">02</span> Meet your crew</p>
                
                <div class="crew__container">
                    ${crewContent(crew, crewName)}
                </div>
            </section>`;
            return;
        }

        // Fade out, update content and fade back in
        crewContainer.classList.add('fade-out');
        setTimeout(() => {
            crewContainer.innerHTML = crewContent(crew, crewName);
            crewContainer.classList.remove('fade-out');
        }, 500);
    };

    const crewContent = function (crew, crewName) {
        const member = crew[crewName];

        return ` 
            <div class="crew__details">
                <div class="crew__details--box">
                    <p class="crew__role">${member.role}</p>
                    <h1 class="crew__name">${member.name}</h1>
                    <p class="crew__summary">
                        ${member.bio}
                    </p>
                </div>

                <ul class="dots__container">${Object.values(crew)
                    .map(
                        (member) => `
                        <li class="dot ${
                            camelCaseName(member) === crewName ? 'active' : ''
                        }" data-name=${camelCaseName(member)}>
                        </li>
                    `
                    )
                    .join('')}
                </ul>
            </div>
            <div class="crew__image--box">
                <picture>
                    <source srcset="${
                        images[crewName].webp
                    }" type="image/webp" />
                    <img class="crew__image"
                        src="${images[crewName].png}"
                        alt="Crew Member ${member.name}"
                    />
                </picture>
            </div>
        `;
    };

    (function handleCrewSwitch() {
        document.querySelector('main').addEventListener('click', (e) => {
            if (!e.target.classList.contains('dot')) return;

            const selectedCrew = e.target.dataset.name;
            if (!selectedCrew) return;

            render(selectedCrew);
        });
    })();

    return { render };
};

export default crewView();
