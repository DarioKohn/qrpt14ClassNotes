// first step is the keyword function followed by the name of the function and the params
function stringCheck(x) {
    return typeof x == 'string';
}; 
function numberCheck(x) {
    return typeof x == 'number'; 
}; 
function booleanCheck(x) {
    return typeof x == 'boolean'; 
};

describe("value testing", () => {
    test("strings are strings", () => {
        expect(stringCheck("Functions are fun")).toBeTruthy(); 
        expect(stringCheck(500)).toBeFalsy(); 
    }); 
    test('numbers should be numbers', () => {
        expect(numberCheck(500)).toBeTruthy(); 
        expect(numberCheck('10000')).toBeFalsy(); 
    }); 
    test('booleans should be booleans', () => {
        expect(booleanCheck(5 < 10)).toBeTruthy();
        expect(booleanCheck('true')).toBeFalsy();  
    }); 
});