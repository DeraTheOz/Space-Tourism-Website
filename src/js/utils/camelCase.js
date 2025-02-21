export default function camelCaseName(obj) {
    const splitName = obj.name.trim().split(/\s+/g);
    let newName;

    if (splitName.length <= 1) {
        newName = splitName[0].toLowerCase();
    } else {
        const firstName = splitName[0].toLowerCase();
        const lastName = splitName
            .slice(1)
            .map(
                (name) =>
                    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            );

        newName = firstName + lastName.join('');
    }

    return newName;
}
