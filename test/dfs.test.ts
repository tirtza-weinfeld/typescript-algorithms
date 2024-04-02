import { describe, expect, test } from '@jest/globals';
import { depthFirstSearch } from '../src/searching';
import { Graph } from '../src/data-structures';





describe('dfs', () => {
    




    test('should perform DFS traversal on a simple graph', () => {

        /**
        * ```   
        *       A
        *      / \
        *     B   C
        *    / \   \
        *   D   E   F
        *          /
        *         G
        * ```
        */
        const graph = Graph.create({
            A: ['B'],
            B: ['C', 'D'],
            C: ['E'],
            D: ['F'],
            E: [],
            F: [],
            G: [],
        });

        const startingVertex = 'A';
        // const expectedTraversalOrder = ['A', 'B', 'D', 'F', 'C', 'E'] || ['A', 'B', 'C', 'E', 'D', 'F'];
        const actualTraversalOrder = depthFirstSearch(graph, startingVertex);

        expect(actualTraversalOrder).toEqual(['A', 'B', 'D', 'F', 'C', 'E'] || ['A', 'B', 'C', 'E', 'D', 'F']);
    });

    test('should handle an empty graph', () => {
        const graph = new Graph();
        const startingVertex = 'A'; // Non-existent vertex

        expect(() => depthFirstSearch(graph, startingVertex)).toThrowError(
            'Vertex not found in the graph'
        );
    });

    // Add more test cases for different graph structures and edge cases

    test('should handle a graph with a cycle', () => {
        const graph = Graph.create({
            A: ['B', 'C'],
            B: ['C', 'D'],
            C: ['A'], // Cycle between A, B, and C
            D: [], // Dead end
        });

        const startingVertex = 'A';
        // No specific expected order for a cycle, as traversal might visit nodes differently

        const actualTraversalOrder = depthFirstSearch(graph, startingVertex);
        expect(actualTraversalOrder.includes('A')).toBeTruthy(); // Ensures A is visited
        expect(actualTraversalOrder.includes('B')).toBeTruthy(); // Ensures B is visited
        expect(actualTraversalOrder.includes('C')).toBeTruthy(); // Ensures C is visited
    });

});
