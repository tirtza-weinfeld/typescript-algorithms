

export class Vertex {

    constructor(private name: string) { }


    #neighbors = new Map<string, Vertex>();


    [Symbol.toPrimitive](hint: string): Vertex["name"] {
        return this.name;
    }

    get neighbors() {
        return [...this.#neighbors.values()];
    }
    addNeighbor(v: Vertex) {
        this.#neighbors.set(`${v}`, v);
    }
    deleteNeighbor(v: Vertex) {
        this.#neighbors.delete(`${v}`);
    }

}


export type MatchingVertex = Vertex & {
    group: 'L' | 'R' | ''
}



// export interface R {
//     f1: () => boolean;
//     f2: () => string;
//     v1:string;
//     v2:Vertex;
// }