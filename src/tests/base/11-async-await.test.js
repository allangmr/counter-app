import { getImagen } from "../../base/11-async-await";

describe('Test of 11-async-await', () => {
    test('should be return a image url', async() => {
        const url = await getImagen();

        expect( url.includes('https://')).toBe(true);

    })
    
});