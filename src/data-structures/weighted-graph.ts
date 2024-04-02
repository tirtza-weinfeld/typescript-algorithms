import {  WeightedEdge } from "./edge";
import { Graph } from "./graph";
import { Vertex } from "./vertex";



export class WeightedGraph extends Graph<Vertex, WeightedEdge<Vertex>>{

    constructor(graph?: { [key: string]: { [key: string]: number } }) {
        super();
        if (graph)
            for (const u in graph) {
                for (const v in graph[u]) {
                    const [v1, v2, weight] = [new Vertex(u), new Vertex(v), graph[u][v]];
                    this.addEdge(new WeightedEdge(v1, v2, weight));
                    if (!this.directed && !this.getEdge(v, u)) {
                        this.addEdge(new WeightedEdge(v2, v1, weight));
                    }
                }
            }
    }



    get weight() {
        return [...this].reduce((p, c) => p += +c, 0);
    }









}