import { WeightedEdge } from "../data-structures/edge";
import { MinHeap } from "../data-structures/min-heap";
import { Vertex } from "../data-structures/vertex";
import { WeightedGraph } from "../data-structures/weighted-graph";

/**
 * We choose an arbitrary start vertex,
 * and attempt to sequentially reduce the distance to all vertices.
 * After attempting to find the lowest weight edge to connect all vertices, we return our MST 
 * 
 * **Implemented using a binary heap**
 *
 * @complexity `O(E lg V )`
 * 
 * Prim’s algorithm runs in `O(V) · T_extractMin + O(E) · T_decreaseKey`
 * 
 * | Priority Queue | T_extractMin         | T_decreaseKey    | Total          |
 * | -------------- | -------------------- | ---------------- | -------------- |
 * | Array          | O(V )                | O(1)             | O(V 2)         |
 * | `Binary heap`  | O(lg V )             | O(lg V )         | `O(E lg V )`   |
 * | Fibonacci heap | O(lg V ) (amortized) | O(1) (amortized) | O(E + V lg V ) |
 * 
 * 
 * @param graph 
 * @param s 
 * @returns 
 */
export function prims(graph: WeightedGraph, s: string): WeightedGraph {
    //TODO refactor

    const mst: WeightedGraph = new WeightedGraph();
    const parents: Map<string, string> = new Map([[s, s]]);
    const q = new MinHeap(
        "weight",
        new Array<{ name: string; weight: number }>()
    );

    graph.vertices.forEach((v) =>
        q.insert({
            name: `${v}`,
            weight: `${v}` === s ? 0 : Number.POSITIVE_INFINITY,
        })
    );

    while (q.length) {
        const { name: u, weight: u_weight } = q.extractMin()!;
        mst.addEdge(
            new WeightedEdge(new Vertex(parents.get(u)!), new Vertex(u), u_weight)
        );

        const adg = graph.getVertex(u);

        if (adg) {
            for (const v of adg.neighbors) {
                if (!mst.getEdge(u, `${v}`) && !mst.getEdge(`${v}`, u)) {
                    const q_neighbor = q.get("name", `${v}`);

                    if (q_neighbor) {
                        const { weight: v_weight } = q_neighbor;

                        const e = graph.getEdge(u, `${v}`);
                        const weight = +e!;
                        if (weight < v_weight) {
                            q.decreaseKey("name", `${v}`, weight);
                            parents.set(`${v}`, u);
                        }
                    }
                }
            }
        }
    }

    return mst;
}
