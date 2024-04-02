import { max } from "./math.utils";
/**
 * 
 * @param iterableIterator 
 * @returns Return a reverse iterator over the keys of the Iterable.
 */
export function reversed(iterableIterator: Iterable<number>) {
    return [...iterableIterator].reverse().values()
}


/**
 * 
 * @param  start The value of the start parameter (or 0 if the parameter was not supplied)
 * @param stop The value of the stop parameter
 * @param  step The value of the step parameter (or 1 if the parameter was not supplied)
 * @returns  an iterable of values in the specified range
 */
export function range(stop: number): IterableIterator<number>;
export function range(start: number, stop: number): IterableIterator<number>;
export function range(start: number, stop: number, step: number): IterableIterator<number>;
export function range(...args: [stop: number] | [start: number, stop: number] | [start: number, stop: number, step: number]): IterableIterator<number> {
    const [start, stop, step] = args.length === 3 ? args : args.length === 2 ? [...args, 1] : [0, ...args, 1];
    return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step).values();
}



/**
 * ## list
 * @param value deafult array item value 
 * @param length the length of the new array
 * @returns a new array ,of length = length, arr[i] = value;
 */
export function List<T>(value: T, length: number) {

    return Array.from({ length: length }, _ => copyOf(value));
}



function copyOf<T>(value: T): T {

    return value instanceof Array ?
        [...value] as T :
        value instanceof Object ?
            { ...value } :
            value;
}

/**
 * 
 * @param value deafult item value  
 * @param j column length
 * @param i row length
 * @returns a new nested array ,of size[i,j] , array[i][j] = value 
 */
export function NestedList<T>(value: T, j: number, i = j) {
    return Array.from(
        { length: i },
        () => Array.from(
            { length: j },
            () => copyOf(value)
        )
    )
}




/**
 * @param values Numeric expressions to be evaluated.
 * @returns   
 *  * The larger of a set of supplied numeric expressions.   see {@link max} 
 *  * And the corresponding index
 */
export function maxIndex(...values: number[]): [max: number, index: number] {
    const _max = max(...values);
    const _index = values.findIndex(v => v === _max);
    return [_max, _index];
};




export function mapNumbersToString(...value: number[]) {
    return value.map(n => String.fromCharCode("a".charCodeAt(0) + n)).join()
}
export function mapStringToNumbers(value: string) {
    return [...value].map(s => (s.charCodeAt(0) - "a".charCodeAt(0) + 1));
}


const alphabet = Array.from(range("a".charCodeAt(0), "z".charCodeAt(0), 1)).map((x) =>
    String.fromCharCode(x),
);




// const rangeIterable = {
//     *[Symbol.iterator](...args: [stop: number] | [start: number, stop: number] | [start: number, stop: number, step: number]): IterableIterator<number> {
//         const [start, stop, step] = args.length === 3 ? args :
//             args.length === 2 ? [...args, 1] :
//                 [0, ...args, 1];
//         for (let i = start; i < stop; i += step) {
//             yield i;

//         }
//     }
// };



// export const range = [rangeIterable];;

// export function* reversed<T>(iterableIterator: IterableIterator<T>) {
//     for (const iterator of [...iterableIterator].reverse()) {
//         yield iterator;
//     }
// }
