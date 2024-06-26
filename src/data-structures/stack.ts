
/**
 * last-in first-out data type
 * @example
 * ```ts
 * const stack = new Stack([1, 2, 3, 4, 5]);
 * ```
 */
export class Stack<T> {


    constructor(...arg: T[]) {
        this.list = arg;
    }

    /**
     * @internal
     * implemented using a Javascript array
     */
    protected list: T[] = [];


    /**  
     * Appends new elements to the end of the sequence, and returns the new length of the sequence.
     * @param items New elements to add to the sequence.
     * @complexity `O(n)`
     */
    add(...node: T[]) {
        this.list = [...this.list, ...node];
        return this.length;
    }


    /**
    * Removes and returns the last element in the stack.
    * @example
    * ```ts
    * const stack = new Stack([1, 2, 3, 4, 5]);
    * console.log(stack.remove()) //[1, 2, 3, 4]
    * ```
    * @complexity `O(n)`
    */
    remove() {
        const node = this.list.at(-1);
        this.list = this.list.slice(0, -1);
        return node;
    }

    /**
     * Returns the item located at the specified index.
     * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
     * @complexity `𝛩(1)`
     */
    at(index: number): T | undefined {
        return this.list.at(index);
    }

    /**
    * Gets or sets the length of the sequence. This is a number one higher than the highest index in the sequence.
    */
    get length() {
        return this.list.length;
    }

    /**
    * Overwrites the value at the provided index with the
    * given value. If the index is negative, then it replaces from the end
    * of the sequence.
    * @example
    * ```ts
    * console.log(stack.setAt(1,6)) //1,6,3,4,5
    * ```
    * 
    * @param index The index of the value to overwrite. If the index is
    * negative, then it replaces from the end of the sequence.
    * @param value The value to write into the provided index `v`.
    * @returns The updated sequence. 
    * @complexity `𝛩(1)`
    */
    setAt(index: number, value: T): T[] {
        this.list[index < 0 ? this.length + index : index] = value;
        return this.list;

    }



}