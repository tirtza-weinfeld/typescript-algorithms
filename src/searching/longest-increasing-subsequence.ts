import { List, max, maxIndex, range, reversed } from "../utils";


/**
 *
 * 
 * Given a string `A`, find a longest (not necessarily contiguous) subsequence of A that strictly
 * increases (lexicographically).
 * 
 * @example
 *  ```
 * A = carbohydrate, Solution = abort, of length 5
 * ```
 * 
 * @description
 * 
 * ## Dynamic programming solution
 * 
 * * **Subproblems**
 *  
 *    * `x(i)` = length of longest increasing subsequence of **suffix** `A[i :]` that includes `A[i]` ,`For 0 <= i <= |A|`
 *  
 * * **Relate**
 * 
 *    * `A[i]` is in LIS (_first element_)
 *    * what is the second element of LIS?
 *      * Could be any `A[j]` where `j > i` && `A[j] > A[i]` 
 *      * Or `A[i]` might be the last element of LIS 
 * 
 * `x(i) = max{ 1 + x(j) |  i < j < |A|,  A[j] > A[i] } ∪ {1}`
 * 
 * * **Topological order**
 * 
 *    * Decreasing i
 * 
 * * **Base**
 * 
 *   Not necessary, because we considered the possibility that `A[i]` is last
 * 
 * * **Original problem**
 * 
 *    * What is the first element of LIS? _Guess_
 *      * Length of LIS of A is `max{ x(i) | 0 <= i < |A| }`
 *    * Store parent pointers to reconstruct subsequence
 * 
 * * **Time**
 * 
 *    *  \#subproblems: `|A|`
 *    *  work per subproblem: `O(|A|)`
 *    *  **`O(|A|^2)` running time**
 *    *  can speed up to **`O(|A|log A|)`** by doing only `O(log|A|)` work per subproblem, via AVL tree augmentation
 *  
 * 
 */


export class LongestIncreasingSubsequence {

    /**
     * For simplicity will start with solely calculating the length of the Longest Increasing Subsequence(which is essentially equivalent,
     * but simplifies the code by removing the the parent overhead code).
     * @time O(|A|^2)
     * @param A sequence
     * @returns the __length__ of a longest (not necessarily contiguous) subsequence of A that strictly increases
     */
    static length(A: string): number;
    static length(A: number[]): number;
    static length(A: string | number[]) {

        const a = A.length;
        const x = List(1, a);

        for (const i of reversed(range(a)))
            for (const j of range(i, a))
                if (A[j] > A[i])
                    x[i] = max(x[i], 1 + x[j]);

        return max(...x);
    }


    /**
     * in the following function we store the parent pointers while calculating the length,
     * and then reconstruct subsequence.
     * @param A sequence
     * @returns the longest **subsequence** of A that strictly increases
     */
    static get(A: string): string;
    static get(A: number[]): number[];
    static get(A: string | number[]): typeof A {

        const a = A.length;
        const x = List(1, a), p = List(-1, a);

        for (const i of reversed(range(a)))
            for (const j of range(i, a))
                if (A[j] > A[i] && 1 + x[j] > x[i])
                    [x[i], p[i]] = [1 + x[j], j];


        const [_max, _index] = maxIndex(...x);



        /**
         * follows the parents index to recunstruct the subsequence
         * @param i 
         * @returns the actual subsequence 
         */
        const parents = (i: number): (string | number)[] =>
            i === -1 || i > a ?
                [] :
                [A[i], ...parents(p[i])];


        return typeof (A) === "string" ? parents(_index).join('') : parents(_index) as number[];

    }








}

