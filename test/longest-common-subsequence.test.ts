import { describe, expect, test } from '@jest/globals';
import { lcs } from '../src/searching/longest-common-subsequence';


describe('longest common subsequence', () => {

    describe('length', () => {


        test('should work with strings', () => {

            const A = "hieroglyphology", B = "michaelangelo";

            // expect(lcs(A, B)).toBe('hello' ?? 'heglo' ?? 'iello' ?? 'ieglo');
            expect(lcs(A, B)).toBe(5);
        });

        test('should work with empty strings', () => {
            // expect(lcs('', '')).toBe('');
            expect(lcs('', '')).toBe(''.length);
        });

        test('should work with first string empty', () => {
            expect(lcs('', 'abcd')).toBe(0);
        });

        test('should work with second string empty', () => {
            // expect(lcs('abcd', '')).toBe('');
            expect(lcs('abcd', '')).toBe(''.length);
        });

        test('should work if there is no lcs', () => {
            // expect(lcs('qtwer', 'zvxcv')).toBe('');
            expect(lcs('qtwer', 'zvxcv')).toBe(''.length);
        });

        test('should work if lcs is whole first string', () => {
            // expect(lcs('abc', 'abcdefghi')).toBe('abc');
            expect(lcs('abc', 'abcdefghi')).toBe('abc'.length);
        });

        test('should work if lcs is whole second string', () => {
            // expect(lcs('qwerty', 'rty')).toBe('rty');
            expect(lcs('qwerty', 'rty')).toBe('rty'.length);
        });

        test('should work with repeated letter', () => {
            // expect(lcs('AAATC', 'GGTAGGC')).toBe('AC');
            expect(lcs('AAATC', 'GGTAGGC')).toBe('AC'.length);
        });

        test('should work with custom characters', () => {
            // expect(lcs(':-)', 'B-)')).toBe('-)');
            expect(lcs(':-)', 'B-)')).toBe('-)'.length);
        });

        test('should work with long strings', () => {
            // expect(lcs('this is the first string', 'that is second')).toBe('tht is sn');
            expect(lcs('this is the first string', 'that is second')).toBe('tht is sn'.length);
        });

        test('should work with very long strings', () => {
            // expect(lcs('giiiiiiit1huuuuuu2bbb', 'zzxxcvasdfgmntplpliiggggu2b222')).toBe('giiu2b');
            expect(lcs('giiiiiiit1huuuuuu2bbb', 'zzxxcvasdfgmntplpliiggggu2b222')).toBe('giiu2b'.length);
        });




    });
});