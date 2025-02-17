export function renderDestination () {
    return `
        <section class="destination__hero">
            <p class="destination__intro"><span class="destination__step">01</span> Pick your destination</p>
            <div class="destination__container">
                <div class="destination__image--box">
                    <img
                        class="destination__image"
                        src="../../assets/destination/image-moon.png"
                        alt="Full Moon Image"
                    />
                </div>
                <div class="destination__details">
                    <ul class="destination__list">
                        <li class="destination__item destination__item--active">Moon</li>
                        <li class="destination__item">Mars</li>
                        <li class="destination__item">Europa</li>
                        <li class="destination__item">Titan</li>
                    </ul>

                    <h1 class="destination__title">Moon</h1>
                    <p class="destination__summary">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                        regain perspective and come back refreshed. While you’re there, take in some history by
                        visiting the Luna 2 and Apollo 11 landing sites.
                    </p>

                    <div class="summary__line"></div>

                    <div class="destination__statistics">
                        <p class="destination__distance">Avg. distance <span>384,400 km</span></p>
                        <p class="destination__time">Est. travel time <span>3 days</span></p>
                    </div>
                </div>
            </div>
        </section>
    `
}