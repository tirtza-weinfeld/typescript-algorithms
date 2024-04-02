
import { DisjointSet } from "../data-structures";
import { WeightedGraph } from "../data-structures/weighted-graph";




export function kruskal(graph: WeightedGraph) {


    const mstForest = new DisjointSet();
    const mst: { u: string, v: string, weight: number }[] = [];


    graph.vertices.forEach(v => mstForest.makeSet(`${v}`));
    const sortedEdgeList = graph.sort(
        (edgeA, edgeB) =>
            +edgeA - +edgeB
    );

    for (const { v1: u, v2: v, weight } of sortedEdgeList) {
        if (mstForest.union(`${u}`, `${v}`))
            mst.push({ u: `${u}`, v: `${v}`, weight });

       
    }

    return mst;
}



