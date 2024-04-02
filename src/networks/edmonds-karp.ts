import { Network, ResidualNetwork } from "../data-structures/flow-network";
import { findShortestPath } from "../shortest-path";




export class EdmondsKarp {



    static maximumFlow(graph: Network, s: string, t: string): number {



        let residualGraph = new ResidualNetwork(graph);
        let [residualPath, residualCapacity] = EdmondsKarp.bfs(residualGraph, s, t);



        while (residualPath) {
            graph.augmentPath(residualPath, residualCapacity!);
            residualGraph = ResidualNetwork.buildResidualGraph(graph)!;
            [residualPath, residualCapacity] = EdmondsKarp.bfs(residualGraph, s, t);
        }


        return graph.flow(s);


    }



    static bfs(residualGraph: ResidualNetwork, s: string, t: string): [residualPath: [string, string][], residualCapacity: number] | [undefined, undefined] {

        const shortestPath = findShortestPath(residualGraph, s, t);

        return !shortestPath?.length ? [undefined, undefined] : EdmondsKarp.findMinResidualCapacity(shortestPath, residualGraph);
    }


    static findMinResidualCapacity(shortestPath: string[], graph: ResidualNetwork): [shortestPathEdges: [string, string][], minResidualCapacity: number] {

        let minResidualCapacity = Number.POSITIVE_INFINITY;
        const shortestPathEdges: [string, string][] = [];

        for (let i = 0; i < shortestPath.length - 1; i++) {
            const [u, v] = [shortestPath[i], shortestPath[i + 1]];
            shortestPathEdges.push([u, v]);
            const edge = graph.getEdge(u, v);
            if (edge!.capacity < minResidualCapacity)
                minResidualCapacity = edge!.capacity;
        }
        return [shortestPathEdges, minResidualCapacity];

    }

}