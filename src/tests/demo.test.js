describe('Tests from demo.test.js', () => {
    test('should be equal the strings', () => {
        //1. Arrange
        const mensaje = 'Hola Mundo';
    
        //2. Acts
        const mensaje2 = `Hola Mundo`;
    
        //3. Asserts
        expect(mensaje).toBe(mensaje2); // ===
    })     
});
