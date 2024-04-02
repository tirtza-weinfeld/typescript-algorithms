
/**
 * last-in first-out data type
 */
export class Stack<T> {

    constructor(...arg: T[]) {
        this.list = arg;
    }

    protected list: T[] = [];

    /**
     * 
     * @time `O(n)`
     */
    add(node: T) {
        this.list = [...this.list, node];
    }

    isEmpty() {
        return !!this.list.length
    }

    /**
    * 
    * @time `O(n)`
    */
    remove() {
        const node = this.list.at(-1);
        this.list = this.list.slice(0, -1);
        return node;
    }

    /**
     * Returns the item located at the specified index.
     * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
     * @time `O(1)`
     */
    at(index: number): T | undefined {
        return this.list.at(index);
    }

    
}