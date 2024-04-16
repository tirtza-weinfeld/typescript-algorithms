
import { DisjointSet } from "../data-structures";
import { WeightedGraph } from "../data-structures/weighted-graph";



/**
 * Kruskal’s Algorithm is an algorithm to solve the MST problem
 * It constructs a MST by taking the globally lowest-weight edge and contracting it.
 * 
 * @complexity
 * `O(E lg E + Eα(V ))`
 * 
 * * T_sort(E) + O(V ) · T_makeSet + O(E)(T_find + T_union) = O(E lg E + Eα(V ))
 * * T_makeSet is `O(1)` and T_find +T_Union is `amortized O(α(V ))` for Union-Find data structures.
 * * Furthermore, if all weights are integer weights, or all weights are in the range
 * [0, E^O(1)], then the runtime of the _sorting step_ is `O(E`), using Counting Sort or a
 * similar algorithm, and the runtime of Kruskal’s Algorithm will be better than that
 * of [Prim’s](api/spanning-trees/prims) Algorithm.
 * 
 * @param graph 
 * @returns 
 */
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



