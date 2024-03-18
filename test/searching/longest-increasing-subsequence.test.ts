import { describe, expect, test } from '@jest/globals';
import { lis, lisLength } from '../../src/searching/longest-increasing-subsequence';
import { mapStringToNumbers } from '../../src/utils/sequence.utils';


describe('longest increasing subsequence', () => {

    describe('lisLength', () => {

        test('should work with strings', () => {
            expect(lisLength('carbohydrate')).toBe(5);
        });

        test('should work with empty strings', () => {
            expect(lisLength('')).toBe(0);
        });
        test('should work with empty array', () => {
            expect(lisLength([])).toBe(0);
        });
        test('should work with length 1 ', () => {
            expect(lisLength([3])).toBe(1);
        });

        test('should work with numbers', () => {
            expect(lisLength(mapStringToNumbers("carbohydrate"))).toBe(5);
        });

    });



    describe('lis', () => {

        test('should work with strings', () => {
            expect(lis('carbohydrate')).toBe('abort');
        });

        test('should work with empty strings', () => {
            expect(lis('')).toBe('');
        });
        test('should work with empty array', () => {
            expect(lis([])).toEqual([]);
        });
        test('should work with length 1 ', () => {
            expect(lis([3])).toEqual([3]);
        });

    });
});