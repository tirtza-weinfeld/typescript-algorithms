import { max, List, range, reversed } from "../utils"




/**
 * keeps track of how many of each key map to each index, and then moves each item only once
 * @param list a list to be sorted
 * @param digit the digit we want to sort by
 * @param radix the base of the number system
 * @returns sorted list
 */
export function countingSort(list: number[]): number[];
export function countingSort(list: number[], digit: number, radix: number): number[];
export function countingSort([...list]: number[], digit?: number, radix?: number) {

    const u = radix ?? 1 + max(...list);

    let counterList = List(0, u);

    const key = radix ? (x: number) =>
        Math.floor(x / radix ** digit!) % radix :
        (x: number) => x;


    for (const x of list)
        counterList[key(x)]++;

    for (const k of range(1, u))
        counterList[k] += counterList[k - 1];

    for (const x of [...reversed(list)]) {
        list[counterList[key(x)] - 1] = x;
        counterList[key(x)]--;

    }
    return list;


}


/**
 * moves each item into a chain and then back into place
 * @param list of non-negative keys
 * @param key 
 */

export function countingSortImplementationB(list: number[]): number[];
export function countingSortImplementationB(list: number[], digit: number, radix: number): number[];
export function countingSortImplementationB([...list]: number[], digit?: number, radix?: number) {


    const u = radix ?? 1 + max(...list);

    const key = radix ? (x: number) =>
        Math.floor(x / radix ** digit!) % radix :
        (x: number) => x;


    const chains = List<number[]>([], u);

    for (const x of list)
        chains[key(x)].push(x);

    let i = 0;
    for (const chain of chains)
        for (const x of chain)
            list[i++] = x;


    return list;

}



