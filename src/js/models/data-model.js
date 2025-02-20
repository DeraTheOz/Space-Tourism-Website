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
            const key = member.name.trim().split(/\s+/g);
            if (!key.length) return '';

            const firstWord = key[0].toLowerCase();
            const secondWord = key
                .slice(1)
                .map(
                    (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                );

            const newKey = firstWord + secondWord.join('');

            acc[newKey] = member;
            return acc;
        }, {});
    };

    const getTechnology = () => {
        return data.technology.reduce((acc, tech) => {
            const key = tech.name.trim().split(/\s+/g);
            let newKey;

            if (key.length <= 1) {
                newKey = key[0].toLowerCase();
            } else {
                const firstWord = key[0].toLowerCase();
                const secondWord = key
                    .slice(1)
                    .map(
                        (word) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase()
                    );

                newKey = firstWord + secondWord.join('');
            }

            acc[newKey] = tech;
            return acc;
        }, {});
    };

    return { getDestinations, getCrew, getTechnology };
};

export default dataModel();
