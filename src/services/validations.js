// TODO: Refactor validation function to follow the defined validations rules
const isValid = () => Math.random() >= 0.5;

const validation8char = (gamertag) => {
    return gamertag.length >= 8;
};

const validationCharSpeciaux = (gamertag) => {
    return /[&$!è§à_]/.test(gamertag);
};

const validationNumber = (gamertag) => {
    return /[0-9]/.test(gamertag);
};

module.exports = {
    isValid,
    validation8char,
    validationCharSpeciaux,
    validationNumber,
};
