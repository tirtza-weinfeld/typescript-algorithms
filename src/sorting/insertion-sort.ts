import { range } from "../utils"
/**
 * @description
 * **Insertion sort maintains and grows a subset of the first i input items in sorted order**
 * 
 * * Having already sorted sub-array A[ :i]
 * * the algorithm repeatedly swaps item A[i] with the item to its left until the left item is no larger than A[i]. 
 * 
 * @complexity 
 * `O(n^2)`
 *  can require `Ω(n^2)` _comparisons_ and `Ω(n^2)` _swaps_ in the worst case
 *  
 */

export function insertionSort([...list]: number[]){

    for (const i of range(1, list.length))
        for (
            let j = i;
            j > 0 && list[j] < list[j - 1];
            [list[j - 1], list[j]] = [list[j], list[j - 1]], j--
        );
    return list;
}