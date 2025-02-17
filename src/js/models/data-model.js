import data from '../../../data.json';

const dataModel = function () {
    const getDestination = () => {
        return data.destinations;
    };

    const getCrew = () => {
        return data.crew;
    };

    const getTechnology = () => {
        return data.technology;
    };

    return { getDestination, getCrew, getTechnology };
};

export default dataModel();
