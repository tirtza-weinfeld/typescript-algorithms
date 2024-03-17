import { list, max, range, reversed } from "../utils/sequence.utils";


export function lis(A: string | number[]) {

    const a = A.length;
    const x = list(1, a);

    for (const i of reversed(range(a))) {
        for (const j of range(i, a)) {
            if (A[j] > A[i]) {
                x[i] = max(x[i], 1 + x[j])
            }
        }
    }

    return max(...x);
}