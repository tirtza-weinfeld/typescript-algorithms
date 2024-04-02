import { Edge } from "./edge";
import { Vertex } from "./vertex";




export class Graph<V extends Vertex = Vertex, E extends Edge<V> = Edge<V>>{


    vertices = new Map<string, V>();
    edges = new Map<string, E>();

    constructor(graph?: Graph<V, E>, public directed = false) {
        if (graph) {
            this.addEdge(...graph);
        }

    }



    *[Symbol.iterator](): IterableIterator<E> {
        yield* [...this.edges.values()];
    };




    sort(compareFn?: (edgeA: E, edgeB: E) => number) {
        return [...this].toSorted(compareFn);
    }


    addEdge(...e: E[]) {
        e.forEach(e => {
            if (!this.getEdge(e)) {
                this.addVertex(e.v1, e.v2);
                // e.v1.neighbors.set(`${e.v2}`, e.v2);
                this.getVertex(e.v1)!.addNeighbor(e.v2);

                this.edges.set(`${e}`, e);
            }
        });
        return e;
    }



    addVertex(...v: V[]) {

        v.forEach(v => {
            if (!this.getVertex(v)) {
                this.vertices.set(`${v}`, v);
            }
        });
        return v;
    }

    deleteVertex(...v: V[]) {

        v.forEach(v => {
            this.vertices.delete(`${v}`);
            this.vertices.forEach(v => v.deleteNeighbor(v))
        });
        return v;
    }


    getVertex(v: V | string) {
        return this.vertices.get(`${v}`);
    }

    getEdge(...args: [u: string | V, v: string | V] | [e: E | string]) {
        return args.length === 2 ? this.edges.get(Edge.tag(args[0]!, args[1]!)) : this.edges.get(`${args[0]}`);

    }

    deleteEdge(...e: E[]) {

        e.map(e => {
            const v = this.getVertex(e.v1);
            if (v) {
                v.deleteNeighbor(e.v2);
                this.edges.delete(`${e}`);
            }
        });

        return e;
    }


    getEdgeNeighbors(v: V | string) {
        const edges: E[] = [];
        this.getVertex(v)?.neighbors.map(n => { const e = this.getEdge(v, `${n}`); if (e) edges.push(e) });
        return edges;
    }


    static create = (edges: { [key: string]: string[] }): Graph => {
        const graph = new Graph();
        for (const u in edges) {
            for (const v of edges[u]) {
                graph.addEdge(new Edge(new Vertex(u), new Vertex(v)));
            }
        }
        return graph;
    };







}
