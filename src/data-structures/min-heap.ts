
class HeapItem<K extends keyof T, T = { [key in K]: number }> {

    constructor(private key: K, public value: T) { }


    [Symbol.toPrimitive](hint: number) {
        return this.value[this.key];
    }

}

/**
 *  
 * * Implementation of a priority queue 
 * * An **array**, visualized as a nearly complete **binary tree**
 * * **Min Heap Property**: The key of a node is <= than the keys of its children
 *  (Max Heap defined analogously) 
 * 
 * @example
 * 
 * [1, 2, 3, 4, 7, 9, 10, 8, 16, 14]  
 * 
 *                  1
 *                /  \
 *               2    3
 *              / \   / \
 *             4   7  9  10
 *            / \  /
 *           8  16 14
 *     
 *              
 * 
 */
export class MinHeap<K extends keyof T, T = { [key in K]: number }> {



    constructor(public key: K, list: T[] = []) {
        this.#list = list.map(item => new HeapItem(key, item));
        this.buildHeap();
    }


    at(i: number) {
        return this.list[i];
    }


    #list: HeapItem<K, T>[] = [];


    /**@internal */
    get list() {
        return this.#list.map(x => x.value);
    }




    /**
     * Converts A[1…n] to a min heap 
     * starts building from n/2 
     * * Because elements A[n/2 + 1 … n] are all leaves of the tree 2i > n, for i > n/2 + 1 
     * 
     * @complexity O(n)
     * * Total amount of work in the for loop can be summed as:
     * * *  `n/4 (1 c) + n/8 (2 c) + n/16 (3 c) + … + 1 (lg n c)`
     * * Setting n/4 = 2k and simplifying we get:
     * * *  `c 2^k ( 1/2^0 + 2/2^1 + 3/2^2 + … (k+1)/2^k )` 
     * 
     * The term is brackets is bounded by a constant! 
     * This means that buildHeap is `O(n) `
     */
    buildHeap() {

        for (let i = Math.floor(this.#list.length / 2); i >= 0; i--)
            this.heapify(i);
    }


    decreaseKey<S extends keyof T>(key: S, value: T[S], k: number) {

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

    /**
     * @complexity O(1)
     */
    get<S extends keyof T>(key: S, value: T[S]) {
        return this.list.find(x => x[key] === value);
    }



    *[Symbol.iterator]() {
        yield* [...this.list];
    };



    get length() {
        return this.#list.length;
    }


    min() { return this.list[0]; }


    extractMin() {

        [this.#list[this.length - 1], this.#list[0]] = [this.#list[0], this.#list[this.length - 1]];
        const min = this.#list.pop()!.value;
        this.heapify(0);
        return min;
    }



    heapifyUp(i: number) {

        const parent = this.parent(i);

        if (parent >= 0 && this.#list[parent] > this.#list[i]) {
            [this.#list[i], this.#list[parent]] = [this.#list[parent], this.#list[i]];
            this.heapifyUp(parent);
        }


    }


    /**
    * correct a **single** violation of the heap property in a subtree at its root 
    * * Assume that the trees rooted at `left(i)` and `right(i)` are min-heaps 
    * * If element `A[i]` violates the min-heap property, 
    * * * correct violation by “trickling” element `A[i]` down the tree
    * * * making the subtree rooted at index `i` a min-heap
    * 
    * @complexity  O(L) for the nodes that are L levels above the leaves
    * * `O(1)` for time for nodes that are _one_ level above the leaves
    * * `O(L)` for the nodes that are _L_ levels above the leaves
    * * `O(lgn)` for _root_ node which is _lgn_ levels above the leaves
    * 
    * @param i 
    * @param heapSize 
    */
    heapify(i: number, start = 0) {

        let left = this.left(i - start) + start;
        let right = this.right(i - start) + start;


        let smallest = (left >= start && this.#list[left] < this.#list[i]) ? left : i;
        smallest = (right >= start && this.#list[right] < this.#list[smallest]) ? right : smallest;

        if (smallest !== i) {
            [this.#list[i], this.#list[smallest]] = [this.#list[smallest], this.#list[i]];
            this.heapify(smallest, start);
        }

    }


    /** 
     * @returns `⌊i / 2⌋`
     * @complexity O(1)
     */
    parent(i: number) { return Math.floor(i / 2); }

    /** 
     * @returns `2 * i + 1`
     * @complexity O(1)
     */
    left(i: number) { return 2 * i + 1; }

    /** 
     * @returns `2 * i + 2`
     * @complexity O(1)
     */
    right(i: number) { return 2 * i + 2; }


    /**
     * @complexity `O(nlogn)` 
     * * after `n` iterations the Heap is empty
     * * every iteration involves a swap and a heapify operation
     * * * hence it takes `O(logn)` time 
     */
    sort() {

        const heap = new MinHeap(this.key, this.list);

        for (let i = 1; i < heap.length; i++) {
            heap.heapify(i, i);
        }

        return heap;

    }





}
