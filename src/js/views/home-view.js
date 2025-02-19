import Router from '../routes/Router.js';

const homeView = function () {
    const render = () => {
        document.body.className = 'home';

        document.querySelector('main').innerHTML = `
        <section class="hero">
            <p class="hero__intro">So, you want to travel to</p>
            <div class="hero__container">
                <div class="hero__box">
                    <h1 class="hero__title">Space</h1>
                    <p class="hero__summary">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space
                        and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
                        a truly out of this world experience!
                    </p>
                </div>
    
                <div class="hero__button--box">
                    <button type="button" class="cta-btn hero__btn">Explore</button>
                </div>
            </div>
        </section>
    `;

        // Route to destination
        const exploreBtn = document.querySelector('.hero__btn');
        const navLinks = document.querySelectorAll('.nav__link');

        exploreBtn.addEventListener('click', () => {
            Router.navigateTo('/destination');

            navLinks.forEach(item => item.classList.remove('active'));
            navLinks[1].classList.add('active');
        });
    };

    return { render };
};

export default homeView();
