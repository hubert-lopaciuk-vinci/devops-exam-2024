// TODO: Create tests suite for validation function
const { isValid, validation8char} = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});

describe('validations tests suites - validation8char', () => {
    test('should return false as gamertag doesnt have atleast 8 characteres', () => {
        const result = validation8char("aaa");
        expect(result).toBe(false);
    });
});
