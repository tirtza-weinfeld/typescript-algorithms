


export function mergeSort(A: number[], a = 0, b?: number) {


    if (b === undefined) {
        A = [...A];
        b = A.length;
    }

    if (1 < b - a) {

        const c = Math.floor((a + b + 1) / 2);

        mergeSort(A, a, c);
        mergeSort(A, c, b);

        const [L, R] = [A.slice(a, c), A.slice(c, b)];
        let [i, j] = [0, 0];

        while (a < b) {
            if ((j >= R.length) || (i < L.length && L[i] < R[j]))
                A[a++] = L[i++];
            else
                A[a++] = R[j++];
        }

    }

    return A;
}











