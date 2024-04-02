import { NetworkEdge, ResidualEdge } from "./edge";
import { Graph } from "./graph";
import { Vertex } from "./vertex";





export class ResidualNetwork extends Graph<Vertex, ResidualEdge<Vertex>>{



    static buildResidualGraph = (graph: Network) => {

        let residualGraph: ResidualNetwork = new ResidualNetwork();

        for (const { v1: u, v2: v, capacity, flow } of graph) {
            if (capacity - flow > 0)
                residualGraph.addEdge(new ResidualEdge(new Vertex(`${u}`), new Vertex(`${v}`), capacity - flow));
            if (flow > 0)
                residualGraph.addEdge(new ResidualEdge(new Vertex(`${v}`), new Vertex(`${u}`), flow));

        }

        return residualGraph;
    }
}


export class Network extends Graph<Vertex, NetworkEdge<Vertex>>{



    constructor(graph?: { [key: string]: { [key: string]: number } }) {
        super();
        if (graph)
            for (const u in graph) {
                for (const v in graph[u]) {
                    this.addEdge(new NetworkEdge(new Vertex(u), new Vertex(v), graph[u][v]))
                }
            }
    }



    augmentFlow = (u: string, v: string, flowIncrease: number) =>
        this.getEdge(u, v)!.flow += flowIncrease;


    augmentPath = (path: [string, string][], flow: number) => {
        for (const [u, v] of path) {
            const edge = this.getEdge(u, v);
            if (edge)
                edge.flow += flow;
            else
                this.getEdge(u, v)!.flow -= flow;
        };
    }



    flow(source: string) {
        return this.getEdgeNeighbors(source)!
            .reduce((maxFlow, edge) => maxFlow + edge.flow!, 0);

    }

}