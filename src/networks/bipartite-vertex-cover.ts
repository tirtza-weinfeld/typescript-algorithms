import { EdmondsKarp } from "./edmonds-karp";
import { Graph, Network } from "../data-structures";
import { NetworkEdge } from "../data-structures/edge";
import { Vertex } from "../data-structures/vertex";




export class BipartiteNetwork {




    static minCover(graph: Graph) {

        let network = new Network();
        for (const { v1: u, v2: v } of [...graph]) {

            if (!network.getEdge('s', `${u}`)) network.addEdge(new NetworkEdge(new Vertex('s'), u, 1));
            if (!network.getEdge(`${v}`, 't')) network.addEdge(new NetworkEdge(v, new Vertex('t'), 1));
            network.addEdge(new NetworkEdge(u, v, Number.POSITIVE_INFINITY));

        }

  
        return EdmondsKarp.maximumFlow(network, 's', 't');


    }




}

