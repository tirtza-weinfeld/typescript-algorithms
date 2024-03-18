import { list, max, maxIndex, range, reversed } from "../utils/sequence.utils";



export function lisLength(A: string | number[]) {

    const a = A.length;
    const x = list(1, a);

    for (const i of reversed(range(a)))
        for (const j of range(i, a))
            if (A[j] > A[i])
                x[i] = max(x[i], 1 + x[j]);

    return max(...x);

}





export function lis(A: string | number[]): typeof A {

    const a = A.length;
    const x = list(1, a), p = list(-1, a);

    for (const i of reversed(range(a)))
        for (const j of range(i, a))
            if (A[j] > A[i] && 1 + x[j] > x[i])
                [x[i], p[i]] = [1 + x[j], j];


    const [_max, _index] = maxIndex(...x);


    const parents = (i: number): (string | number)[] =>
        i === -1 || i > a ?
            [] :
            [A[i], ...parents(p[i])];


    return typeof (A) === "string" ? parents(_index).join('') : parents(_index) as number[];

}





