import { describe, expect, test } from '@jest/globals';
import { range, reversed } from '../src/utils/sequence.utils'


//TODO make sense in these tests

describe('range', () => {


    test('should return ...', () => {
        const r = range(10);
        let s = '';
        for (const iterator of r) {
            s += iterator;
        }
        expect(s).toBe('0123456789');
    });


    test('should return ...', () => {

        const r = [...range(0, 10)];
        expect(r).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    });


    test('should return ...', () => {
        const r = range(3, 10, 2);
        let s = '';
        for (const iterator of r) {
            s += iterator;
        }
        expect(s).toBe('3579');
    });


    test('should return ...', () => {
        expect([...range(3, 10, 2)]).toEqual([3,5,7,9]);
    });

    test('should return ...', () => {
        expect([...reversed(range(3, 10, 2))]).toEqual([3,5,7,9].reverse());
    });



    

});
