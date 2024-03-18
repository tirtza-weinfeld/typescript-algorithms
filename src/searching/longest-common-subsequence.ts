

import { max, nestedList, range, reversed } from "../utils/sequence.utils";


export function lcs(A: string, B: string) {

    const [a, b] = [A.length, B.length];
    const x = nestedList(0, b + 1, a + 1);

    for (const i of reversed(range(a)))
        for (const j of reversed(range(b)))
            x[i][j] =
                A[i] === B[j] ?
                    x[i + 1][j + 1] + 1 :
                    max(x[i + 1][j], x[i][j + 1]);

    return x[0][0];
}