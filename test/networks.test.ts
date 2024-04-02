import { describe, expect, test } from '@jest/globals';
import { Graph, Network } from '../src/data-structures';
import { EdmondsKarp } from '../src/networks';
import { BipartiteNetwork } from '../src/networks/bipartite-vertex-cover';




describe('Edmonds Karp Maximum Flow Algorithm', () => {



    test('should find the maximum flow for a simple network', () => {
        const graph = new Network({
            source: { a: 16, b: 13 },
            a: { sink: 12 },
            b: { c: 10, sink: 4 },
            c: { sink: 14 },
            sink: {},
        });


        const expectedMaxFlow = 25;
        expect(EdmondsKarp.maximumFlow(graph, 'source', 'sink')).toBe(expectedMaxFlow);
    });

    test('should find the maximum flow for a pretty simple network', () => {
        const graph: Network = new Network({
            source: { b: 10, c: 4, d: 4 },
            b: { e: 8, g: 1 },
            c: { g: 5, d: 4 },
            d: { f: 10 },
            e: { sink: 6, g: 15 },
            f: { sink: 3, c: 5 },
            g: { sink: 8 },
            sink: {},
        });

        const expectedMaxFlow = 17;
        expect(EdmondsKarp.maximumFlow(graph, 'source', 'sink')).toBe(expectedMaxFlow);
    });

    test('should find the min cover', () => {
        const graph = Graph.create({

            l1: ['r1', 'r2', 'r3'],
            l2: ['r3'],
            l3: ['r3'],

        });

        const expectedMaxFlow = 2;
        expect(BipartiteNetwork.minCover(graph)).toBe(expectedMaxFlow);
    });
});