import { Vertex } from "./vertex";


export class Edge<V extends Vertex> {


    constructor(public v1: V, public v2: V) { }

    [Symbol.toPrimitive](hint: string): Vertex["name"] {
        return `(${this.v1},${this.v2})`
    }

    static tag<V extends Vertex>(u: string | V, v: string | V) {
        return `(${u},${v})`;
    }


}


export class WeightedEdge<V extends Vertex> extends Edge<V>{
    constructor(v1: V, v2: V, public weight = 0) { super(v1, v2) }

    override[Symbol.toPrimitive](hint: any): typeof hint {
        switch (hint) {
            case "string": return super[Symbol.toPrimitive](hint);
            case "number": return this.weight;
            default: return undefined;
        }
    }

}



// export type ResidualEdge<V extends Vertex> = Omit<NetworkEdge<V>, "flow">;



export class ResidualEdge<V extends Vertex> extends Edge<V>{


    constructor(v1: V, v2: V, public capacity = 0) { super(v1, v2) }

    override[Symbol.toPrimitive](hint: any): typeof hint {
        switch (hint) {
            case "string": return super[Symbol.toPrimitive](hint);
            case "number": return this.capacity;
            default: return undefined;
        }
    }

}


export class NetworkEdge<V extends Vertex> extends ResidualEdge<V>{
    constructor(v1: V, v2: V, capacity: number, public flow = 0) { super(v1, v2, capacity) }


    
}