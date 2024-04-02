import { Graph } from "../data-structures";
import { search } from "./search";




export function depthFirstSearch(graph: Graph, s: string) {
    return search(graph, s, 'dfs').order;
}
export function dfs(graph: Graph, s: string) {
    return search(graph, s, 'dfs').parent;
}






