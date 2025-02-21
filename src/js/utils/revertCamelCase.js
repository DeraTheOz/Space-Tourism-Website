export default function revertCamelCase (str) {
    return str
        .split(/(?=[A-Z])/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};