import { Stack } from "./stack";


/**
 * first-in first-out data type
 */
export class Queue<T> extends Stack<T> {


    override remove() {
        let node;
        [node, ...this.list] = [...this.list]
        return node;
    }
}