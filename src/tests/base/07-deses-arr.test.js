import { retornaArreglo } from "../../base/07-deses-arr";

describe('Test of 07-deses-arr.js', () => {
    test('should return string or number', () => {
        const testArr = ['12', 123 , 123 , 123];

        const [letras,numero1, ...numeros] = retornaArreglo(); //['ABC', 123];
       // expect(arr).toEqual(testArr);
        expect(numero1).toBe(123);
        expect(typeof numero1).toBe('number');
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
    });   
});