// TODO: Create tests suite for validation function
const {
    isValid,
    validation8char,
    validationCharSpeciaux,
    validationNumber,
} = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});

describe('validations tests suites - validation8char', () => {
    test('should return false as gamertag doesnt have atleast 8 characteres', () => {
        const result = validation8char('aaa');
        expect(result).toBe(false);
    });

    test('should return true as gamertag has atleast 8 characteres', () => {
        const result = validation8char('aaaaaaaaaa');
        expect(result).toBe(true);
    });
});

describe('validations tests suites - validationCharSpeciaux', () => {
    test('should return false as gamertag doesnt have atleast 1 special character', () => {
        const result = validationCharSpeciaux('aaaaaaaaa');
        expect(result).toBe(false);
    });

    test('should return true as gamertag has atleast 1 special character', () => {
        const result = validationCharSpeciaux('aaaaaaaaaa_');
        expect(result).toBe(true);
    });
});

describe('validations tests suites - validationNumber', () => {
    test('should return false as gamertag doesnt have atleast 1 number', () => {
        const result = validationNumber('aaaaaaaaaa_');
        expect(result).toBe(false);
    });

    test('should return true as gamertag has atleast 1 number', () => {
        const result = validationNumber('aaaaaaaaaa_1');
        expect(result).toBe(true);
    });
});
