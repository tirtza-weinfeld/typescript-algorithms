
import { List } from "../utils";
import { search } from "../searching/search";
import { Graph } from "../data-structures";
import { Vertex } from "../data-structures/vertex";
import { Edge } from "../data-structures/edge";




export function breadthFirstSearch(graph: Graph, s: string): string[] {
    return search(graph, s, 'bfs').order;
}

export function bfs(graph: Graph, s: string) {
    return search(graph, s, 'bfs').parent;
}







export function findShortestPath<V extends Vertex, E extends Edge<V>>(graph: Graph<V, E>, s: string, t: string) {
    const parent = search(graph, s, 'bfs').parent;
    if (!parent) return;
    let path: string[] = [t];

    for (let p = parent[t]; p && p !== s; p = parent[p])
        path = [p, ...path];


    // return !path.length ? [] : parent[path[0]] ? [parent[path[0]], ...path, t] : [...path, t];

    if (path.length === 1 && parent[t] !== s) return [];
    return parent[path[0]] ? [parent[path[0]], ...path] : path;
}



// export function bfs(adj: any, s: any) {

//     const parent = List(null, adj.length);
//     parent[s] = s;
//     const level = [[s]];

//     while (0 < level[-1].length) {
//         level.push([])
//     }
//     for (let u of level[-2]) {
//         for (let v of adj[u]) {
//             if (parent[v] === null) {

//                 parent[v] = u;
//                 level[-1].push(v);
//             }
//             return parent;
//         }
//     }


// }







// /**
//  * search algorithm that always expands the
//  * **shallowest** node in the frontier
//  * @param adj 
//  * @param s 
//  * @returns 
//  */
// export function bfs(adj: any, s: any) {

//     const frontier = [];

// }



