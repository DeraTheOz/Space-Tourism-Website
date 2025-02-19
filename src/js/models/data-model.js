import data from '../../../data.json';

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
            const key = member.name.toLowerCase().replace(/\s+/g, '-');
            console.log(key);
            acc[key] = member;
            return acc;
        }, {});
    };

    const getTechnology = () => {
        return data.technology.reduce((acc, tech) => {
            const key = tech.name.toLowerCase().replace(/\s+/g, '-');
            console.log(key);
            acc[key] = tech;
            return acc;
        }, {});
    };

    return { getDestinations, getCrew, getTechnology };
};

export default dataModel();
