

import { max, NestedList, range, reversed } from "../utils";

/**
 * 
 * Given two strings A and B, Finds the length of a longest (not necessarily contiguous) subsequence of A that is also a subsequence of B.
 * example
 *  ```
 *         A = hieroglyphology
 *         B = michaelangelo
 *         Solution = hello | heglo | iello | ieglo
 *         all length 5
 * ```
 * 
 *
 * @description
 * 
 * 1. **Subproblems**
 * 
 *   * x(i, j) = length of longest common subsequence of suffixes A[i :] and B[j :]
 *   * For 0 <= i <= |A| and 0 <= j <= |B|
 * 
 * 2. **Relate**
 * 
 *   *  Either first characters match or they don’t
 *   *  If first characters match, some longest common subsequence will use them
 *   *  (if no LCS uses first matched pair, using it will only improve solution)
 *   *  (if an LCS uses first in A[i] and not first in B[j], matching B[j] is also optimal)
 *   *  If they do not match, they cannot both be in a longest common subsequence
 *   *  Guess whether A[i] or B[j] is not in LCS
 *   
 *      
 *      x(i, j) =  x(i + 1, j + 1) + 1                   if A[i] = B[j]
 *                 max{ x(i + 1, j), x(i, j + 1)}        otherwise
 *               
 * 
 *   
 * 3. **Topological order**
 * 
 *  * Subproblems x(i, j) depend only on strictly larger i or j or both
 *  * Simplest order to state: Decreasing i + j
 *  * Nice order for bottom-up code: Decreasing i, then decreasing j
 *  
 * 
 * 4. **Base**
 * 
 *  *  x(i, |B|) = x(|A|, j) = 0 (one string is empty)
 * 
 * 5. **Original problem**
 * 
 *  *  Length of longest common subsequence of A and B is `x(0, 0)`
 *  *  Store parent pointers to reconstruct subsequence
 *  *  If the parent pointer increases both indices, add that character to LCS
 * 
 * 6. **Time**
 * 
 *  *  \#subproblems: `(|A| + 1) · (|B| + 1)`
 *  *  work per subproblem: `O(1)`
 *  *  **`O(|A|·|B|) running time`**
 * 
 * 
 */
export function lcs(A: string, B: string) {

    const [a, b] = [A.length, B.length];
    const x = NestedList(0, b + 1, a + 1);

    for (const i of reversed(range(a)))
        for (const j of reversed(range(b)))
            x[i][j] =
                A[i] === B[j] ?
                    x[i + 1][j + 1] + 1 :
                    max(x[i + 1][j], x[i][j + 1]);

    return x[0][0];
}