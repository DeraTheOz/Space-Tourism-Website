import data from '../../../data.json';

/**
 * Transforms the array into an object for easier lookup.
 * Example output:
 * {
 *   moon: { ...moonData },
 *   mars: { ...marsData },
 *   europa: { ...europaData },
 *   titan: { ...titanData }
 * }
 */
const dataModel = function () {
    const newDestinations = () => {
        return data.destinations.reduce((acc, destination) => {
            const key = destination.name.toLowerCase();
            acc[key] = destination;
            return acc;
        }, {});
    };

    const getDestinations = () => {
        return data.destinations;
    };

    const getCrew = () => {
        return data.crew;
    };

    const getTechnology = () => {
        return data.technology;
    };

    return { newDestinations, getDestinations, getCrew, getTechnology };
};

export default dataModel();
