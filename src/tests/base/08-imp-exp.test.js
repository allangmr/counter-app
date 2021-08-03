import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test in 08-imp-exp.js', () => {
    test('should return one hero for id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('should return undefined if heroe not exist', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('should return heroes from DC for owner', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
    });

    test('should return heroes from Marvel for owner', () => {
        const owner = 'Marvel';
        const heroe = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(2);
    });
});