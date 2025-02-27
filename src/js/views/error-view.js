import Router from '../routes/Router.js';
import imgError from '../../assets/shared/error-image.avif';

const errorView = function () {
    const render = () => {
        const main = document.querySelector('main');
        const errorContainer = document.querySelector('.error__container');

        if (!errorContainer) {
            document.body.className = 'error';

            main.innerHTML = `
                <section class="error__container">
                    <div class="error__img--box">
                        <img
                            src="${imgError}"
                            alt="Page not found"
                        />
                        <h1 class="error__title">Lost in Space</h1>
                        <p class="error__summary">
                            We can’t seem to find the page you were looking for.
                            Let’s get you back to Mission Control before you
                            float off too far.
                        </p>
                    </div>
                    <div>
                        <button type="button" class="cta-btn back-btn">
                            Go back home
                        </button>
                    </div>
                </section>
            `;

            // Route to home
            const backBtn = document.querySelector('.back-btn');
            backBtn.addEventListener('click', () => {
                Router.navigateTo('/');
            });
        }
    };

    return { render };
};

export default errorView();
