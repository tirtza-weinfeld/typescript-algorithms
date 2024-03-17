import { describe, expect, test } from '@jest/globals';
import { lis } from '../../src/searching/longest-increasing-subsequence';
import { mapStringToNumbers } from '../../src/utils/sequence.utils';


describe('longest increasing subsequence', () => {

    describe('length', () => {

        test('should work with strings', () => {
            expect(lis('carbohydrate')).toBe(5);
        });

        test('should work with empty strings', () => {
            expect(lis('')).toBe(0);
        });
        test('should work with empty array', () => {
            expect(lis([])).toBe(0);
        });
        test('should work with length 1 ', () => {
            expect(lis([3])).toBe(1);
        });

        test('should work with numbers', () => {
            expect(lis(mapStringToNumbers("carbohydrate"))).toBe(5);
        });






    });
});