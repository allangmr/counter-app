import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test of 09-promesas.js', () => {
    test('should return a hero getHeroeByIdAsync', ( done ) => {
        const id = 1;
        // const p1  = 
        getHeroeByIdAsync(id)
            .then(heroe =>{
                try {
                expect( heroe).toBe(heroes[0]);
                done();
                }catch(error){
                    done(error)
                }
            })
    })

    test('should be return error if heroe not exist', (done) => {
        const id = 10;
        
        getHeroeByIdAsync(id)
        .catch( error => {
            try {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            }catch (error){
                done(error);
            }
        });

    });
    
})