class HeapItem<K extends keyof T, T = { [key in K]: number }>{

    constructor(private key: K, public value: T) { }


    [Symbol.toPrimitive](hint: number) {
        return this.value[this.key];
    }

}

/**
 *  
 * * Implementation of a priority queue 
 * * An **array**, visualized as a nearly complete **binary tree**
 * * **Max Heap Property**: The key of a node is ≥ than the keys of its children
 *  (Min Heap defined analogously) 
 * 
 * @example
 * 
 * [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]      
 * 
 * 
 *                16
 *               /  \
 *              14    10
 *             / \    / \
 *           8    7  9   3
 *          / \  /
 *         2  4  1
 *           
 *            
 * 
 */
export class MinHeap<K extends keyof T, T = { [key in K]: number }>{


    constructor(public key: K, list: T[] = []) {
        this.#list = list.map(item => new HeapItem<K, T>(item[key] as K, item));
        this.buildHeap();
    }

    #list: HeapItem<K, T>[] = [];

    get list() {
        return this.#list.map(x => x.value);
    }


    /**
     * Converts A[1…n] to a max heap 
     * @complexity O(n) 
     */
    private buildHeap() {

        for (let i = Math.floor(this.#list.length / 2); i >= 0; i--)
            this.heapify(i);
    }



    increasekey<S extends keyof T>(key: S, value: T[S], k: number) {

        const i = this.list.findIndex(x => x[key] === value);

        if (i > -1) {
            (this.list[i][this.key] as number) = k;

            this.heapifyUp(i);
        }
        return this.list;
    }


    insert(x: T) {
        const h = new HeapItem(this.key, x);
        this.#list = [h, ...this.#list];
        this.heapify(0)
    }

    get<S extends keyof T>(key: S, value: T[S]) {
        return this.list.find(x => x[key] === value);
    }




  
    *[Symbol.iterator]() {
        yield* this.list[Symbol.iterator]();
    };



    get length() {
        return this.#list.length;
    }


    max() { return this.list[0]; }


    extractMax() {
        [this.#list[this.length - 1], this.#list[0]] = [this.#list[0], this.#list[this.length - 1]];
        const max = this.#list.pop()!.value;
        this.heapify(0);
        return max;
    }


    heapifyUp(i: number) {

        const parent = this.parent(i);

        if (parent >= 0 && this.#list[parent] < this.#list[i]) {
            [this.#list[i], this.#list[parent]] = [this.#list[parent], this.#list[i]];
            this.heapifyUp(parent);
        }


    }

    /**
     * 
     * @param i 
     * @param heapSize 
     * @returns 
     *  the index of the child which vilates the maxHeapProperty, 
     *  or i ,i if i satisfies the maxHeapProperty
     */
    maxHeapProperty(i: number, heapSize: number) {

        let left = this.left(i);
        let right = this.right(i);

        let max = (left < heapSize && this.#list[left] > this.#list[i]) ? left : i;
        return (right < heapSize && this.#list[right] > this.#list[max]) ? right : max;

    }


    /**
     * correct a **single** violation of the heap property in a subtree at its root 
     * * Assume that the trees rooted at `left(i)` and `right(i)` are max-heaps 
     * * If element `A[i]` violates the max-heap property, 
     * * * correct violation by “trickling” element `A[i]` down the tree
     * * * making the subtree rooted at index `i` a max-heap
     * @param i 
     * @param heapSize 
     */
    private heapify(i: number, heapSize = this.length) {

        const max = this.maxHeapProperty(i, heapSize);
        if (max !== i) {
            [this.#list[i], this.#list[max]] = [this.#list[max], this.#list[i]];
            this.heapify(max, heapSize);
        }

    }



    parent(i: number) { return Math.floor(i / 2); }
    left(i: number) { return 2 * i + 1; }
    right(i: number) { return 2 * i + 2; }



}
