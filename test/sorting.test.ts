import { describe, expect, test } from '@jest/globals';
import { selectionSort } from '../src/sorting/selection-sort';
import { insertionSort } from '../src/sorting/insertion-sort';
import { mergeSort } from '../src/sorting/merge-sort';
import { countingSort, countingSortImplementationB } from '../src/sorting/counting-sort';
import { radixSort } from '../src/sorting/radix-sort';
// import { Heap } from '../src/data-structures';



describe('sorting', () => {

    const A = [8, 2, 4, 9, 3,6];
    const B = [3, 8, 7, 6, 5, 4, 0, 15];
    // const C = [100, 1000, 0, 0, 1, -100, -20];

    const sort = (list: number[]) => list.toSorted((a, b) => a - b);

    [
        selectionSort,
        insertionSort,
        mergeSort,
        countingSortImplementationB,
        countingSort,
        radixSort,
        // Heap.sort

    ].forEach(f => {
        test(f.name, () => {
            expect(f(A)).toEqual(sort(A));
            expect(f(B)).toEqual(sort(B));
            // expect(f(C)).toEqual(sort(C));

        });

    });
    // test('redix', () => {
    //     expect(radixSort(A, 2, countingSort)).toEqual(sort(A));
    // })

});