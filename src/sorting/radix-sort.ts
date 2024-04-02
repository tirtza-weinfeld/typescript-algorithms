
import { log, max, range } from "../utils"
import { countingSort } from "./counting-sort";




/**
 * 
 * @param list 
 * @param radix the base of the number system
 */
export function radixSort([...list]: number[], radix = 2, sortFn = countingSort) {

    const maxKey = max(...list);


    const digits = Math.floor(log(maxKey, radix) + 1);

    for (const i of range(digits))
        list = sortFn(list, i, radix);

    return list;
}


