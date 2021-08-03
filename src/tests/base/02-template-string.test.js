import { getSaludo } from "../../base/02-template-string";

describe('Test in 02-template-string.js', () => {
    test('should be return a valid string with name in GetSaludo', () => {
        //1. Arrange
        const nombre = 'Allan';
        //Act
        const saludo = getSaludo(nombre);
        //Assert
        expect(saludo).toBe(`Hola ${nombre}` );
    });

    //getSaludo should be return default argument if have not argument
    test('should be return a default argument in valid string with name in GetSaludo if have not set argument', () => {
        //1. Arrange
        const defValue = 'Gerardo';
        //Act
        const saludo = getSaludo();
        //Assert
        expect(saludo).toBe(`Hola ${defValue}` );
    });


});