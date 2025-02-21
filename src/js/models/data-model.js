import data from '../../../data.json';
import camelCaseName from '../utils/camelCase.js';

const dataModel = function () {
    const getDestinations = () => {
        return data.destinations.reduce((acc, destination) => {
            const key = destination.name.toLowerCase();
            acc[key] = destination;
            return acc;
        }, {});
    };

    const getCrew = () => {
        return data.crew.reduce((acc, member) => {
            const newKey = camelCaseName(member);

            acc[newKey] = member;
            return acc;
        }, {});
    };

    const getTechnology = () => {
        return data.technology.reduce((acc, tech) => {
            const newKey = camelCaseName(tech);

            acc[newKey] = tech;
            return acc;
        }, {});
    };

    return { getDestinations, getCrew, getTechnology };
};

export default dataModel();
