
class HeapItem<K extends keyof T, T = { [key in K]: number }>{

    constructor(private key: K, public value: T) { }

    [Symbol.toPrimitive](hint: number) {
        return this.value[this.key];
    }

}


export class MinHeap<K extends keyof T, T = { [key in K]: number }>{


    constructor(public key: K, list: T[] = []) {
        this.#list = list.map(item => new HeapItem<K, T>(item[key] as K, item));
        this.buildHeap();
    }

    #list: HeapItem<K, T>[] = [];

    get list() {
        return this.#list.map(x => x.value);
    }

    private buildHeap() {

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

    get<S extends keyof T>(key: S, value: T[S]) {
        return this.list.find(x => x[key] === value);
    }





    *[Symbol.iterator]() {
        yield* this.list[Symbol.iterator]();
    };



    get length() {
        return this.#list.length;
    }


    min() { return this.list[0]; }


    extractMin() {

        [this.#list[this.length - 1], this.#list[0]] = [this.#list[0], this.#list[this.length - 1]];
        const min=this.#list.pop()!.value;
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


    private heapify(i: number, heapSize = this.length) {

        let left = this.left(i);
        let right = this.right(i);

        let smallest = (left < heapSize && this.#list[left] < this.#list[i]) ? left : i;
        smallest = (right < heapSize && this.#list[right] < this.#list[smallest]) ? right : smallest;

        if (smallest !== i) {
            [this.#list[i], this.#list[smallest]] = [this.#list[smallest], this.#list[i]];
            this.heapify(smallest, heapSize);
        }

    }



    parent(i: number) { return Math.floor(i / 2); }
    left(i: number) { return 2 * i + 1; }
    right(i: number) { return 2 * i + 2; }



}
