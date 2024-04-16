import { Vertex } from "./vertex";


export class Edge<V extends Vertex> {


    constructor(public v1: V, public v2: V) { }

    /**
    * A method that converts an Edge object to a corresponding primitive value.
    * Called by the ToPrimitive abstract operation.
    * @param hint 
    * @returns the edge tag  
    */
    [Symbol.toPrimitive](hint: string): Vertex["name"] {
        return `(${this.v1},${this.v2})`;
    }


    // [Symbol.toPrimitive](hint: string){
    //     return `(${this.v1},${this.v2})`
    // }



    /**
     * 
     * @param u the name of the origin vertex
     * @param v the name of the destination vertex
     * @returns `(u,v)`
     */
    static tag<V extends Vertex>(u: string | V, v: string | V) {
        return `(${u},${v})`;
    }


}



export class WeightedEdge<V extends Vertex> extends Edge<V> {
    constructor(v1: V, v2: V, public weight = 0) { super(v1, v2) }

    /**
    * A method that converts a WeightedEdge object to a corresponding primitive value.
    * Called by the ToPrimitive abstract operation.
    * @returns 
    * * If hint = number, it will return the edge `weight`
    * * If hint = string, it will return the edge [tag](api/data-structures/Edge#tag)
    */
    override[Symbol.toPrimitive](hint: any): typeof hint {
        switch (hint) {
            case "string": return super[Symbol.toPrimitive](hint);
            case "number": return this.weight;
            default: return undefined;
        }
    }
    // override[Symbol.toPrimitive](hint: unknown) {
    //     switch (hint) {
    //         case "string": return super[Symbol.toPrimitive](hint);
    //         case "number": return this.weight;
    //         default: return undefined;
    //     }
    // }

}



// export type ResidualEdge<V extends Vertex> = Omit<NetworkEdge<V>, "flow">;



export class ResidualEdge<V extends Vertex> extends Edge<V> {


    constructor(v1: V, v2: V, public capacity = 0) { super(v1, v2) }

    override[Symbol.toPrimitive](hint: any): typeof hint {
        switch (hint) {
            case "string": return super[Symbol.toPrimitive](hint);
            case "number": return this.capacity;
            default: return undefined;
        }
    }

}


export class NetworkEdge<V extends Vertex> extends ResidualEdge<V> {
    constructor(v1: V, v2: V, capacity: number, public flow = 0) { super(v1, v2, capacity) }
}