import dataModel from '../models/data-model.js';
import imageDouglas from '../../assets/crew/image-douglas-hurley.avif';
import imageMark from '../../assets/crew/image-mark-shuttleworth.avif';
import imageVictor from '../../assets/crew/image-victor-glover.avif';
import imageAnousheh from '../../assets/crew/image-anousheh-ansari.avif';
import camelCaseName from '../utils/camelCase.js';

const images = {
    douglasHurley: imageDouglas,
    markShuttleworth: imageMark,
    victorGlover: imageVictor,
    anoushehAnsari: imageAnousheh
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
                <img class="crew__image"
                    src="${images[crewName]}"
                    alt="Crew Member ${member.name}"
                />
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
