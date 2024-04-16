import { Stack } from "./stack";


/**
 * first-in first-out data type
 */
export class Queue<T> extends Stack<T> {


    /**
     * 
     * @returns removes and returns the first item in the queue
     * @example
     * ```ts
     * const queue = new Queue([1, 2, 3, 4, 5]);
     * console.log(queue.remove())) //[2, 3, 4, 5]
     * ```
     * @complexity `O(n)`
     */
    override remove() {
        let node;
        [node, ...this.list] = [...this.list]
        return node;
    }
}