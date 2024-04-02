import { describe, expect, test, xtest } from '@jest/globals';
import { kruskal, prims } from '../src/spanning-trees';
import { WeightedGraph } from '../src/data-structures/weighted-graph';


describe('mst', () => {

    const graph = new WeightedGraph({
        a: { b: 4, h: 8 },
        b: { h: 11, c: 8 },
        c: { d: 7, i: 2, f: 4 },
        d: { e: 9, f: 14 },
        e: { f: 10 },
        f: { g: 2 },
        g: { i: 6, h: 1 },
        h: { i: 7 },

    });


    test('prim ', () => {
        const mst = prims(graph, 'a');

        expect(mst.weight).toBe(37);
       

    })
    test('kruskal ', () => {



        const mst = kruskal(graph);
        const weight = mst.map(({ weight }) => weight).reduce((p, c) => p += c, 0);

        expect(weight).toBe(37);
        


    })
});