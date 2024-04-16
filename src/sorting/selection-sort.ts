import { range } from "../utils"


/**
 * **Selection sort maintains and grows a subset of the largest i items in sorted order**
 * 
 * Having already sorted the largest items into sub-array A[i+1: ], 
 * the algorithm repeatedly scans the array for the largest item not yet sorted
 * and swaps it with item A[i].
 * @complexity 
 * `O(n^2)` 
 * selection sort can require `Ω(n^2)` _comparisons_, but will perform at most `O(n)` _swaps_ in the worst case. 
 *   
 * 
 * @example
 *  
 * ```md
 *  [8,    2,    4,    9,    3  ],
 *  [8,    2,    4,    3,   *9* ],
 *  [3,    2,    4,   *8*,   9  ],
 *  [3,    2,   *4*,   8,    9  ],
 *  [2,   *3*,   4,    8,    9  ]
 * ```
 * 
 */


export function selectionSort([...list]: number[]){
    for (const i of range(list.length - 1, 0, -1)) {
        let m = i;
        for (const j of range(i))
            if (list[m] < list[j])
                m = j;
        [list[m], list[i]] = [list[i], list[m]];
    }
    return list;
}


