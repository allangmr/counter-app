import { getUser, getUsuarioActivo } from "../../base/05-funciones";
describe('Test in  05-funciones.js', () => {
    test('should return some object', () => {
        //1. Arrange
        const userTest = {
            uid:'ABC123',
            username:'El_Papi1502'
        }
        //2. Act
        const user = getUser(); 

        //3. Assert
        expect(user).toEqual(userTest);
    });

    // getUsuarioActivo should return a object
    test('getUsuarioActivo should return some object', () => {
        //1. Arrange
        const username = "blitopa";
        const userTest = {
            uid:'ABC567',
            username:username
        }
        // Also we can use arrays
        // const userArray = [20,10];
        // const userGlobalArray = [20,10];
        //2. Act
        const user = getUsuarioActivo(username); 

        //3. Assert
        expect(userTest).toEqual(user);
    });

});