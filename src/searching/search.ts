
import { Graph } from "../data-structures";
import { Queue } from "../data-structures/queue";
import { Stack } from "../data-structures/stack";



export function search(graph: Graph, s: string, algorithm: 'bfs' | 'dfs'): { order: string[], parent: { [key: string]: string } } {

    if (!graph.getVertex(s)) {
        throw Error('Vertex not found in the graph');
    }

    const parent: { [key: string]: string } = { s: s };
    const frontier: Stack<string> = algorithm === 'dfs' ? new Stack(s) : new Queue(s);


    let vertex = frontier.remove();
    let order: string[] = [];

    while (vertex) {

        order = [...order, vertex];

        graph.getVertex(vertex)?.neighbors.forEach(n => {


            if (!parent[`${n}`]) {
                parent[`${n}`] = vertex!;
                frontier.add(`${n}`);
            }


        });
        vertex = frontier.remove();


    }

    return { order, parent };
}
