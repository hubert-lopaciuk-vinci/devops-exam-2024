// TODO: Refactor validation function to follow the defined validations rules
const isValid = () => Math.random() >= 0.5;

const validation8char = (gamertag) => {
    return (
        gamertag.length === 8
    );
}

module.exports = {
    isEmpty,
    validation8char,
};
