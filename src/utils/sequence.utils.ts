

export function reversed(iterableIterator: IterableIterator<number>) {
    return [...iterableIterator].reverse().values()
}

export function range(...args: [stop: number] | [start: number, stop: number] | [start: number, stop: number, step: number]): IterableIterator<number> {
    const [start, stop, step] = args.length === 3 ? args : args.length === 2 ? [...args, 1] : [0, ...args, 1];
    return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step).values();
}

export function list<T>(value: T, length: number) {
    return Array.from({ length: length }, _ => value);
}


export function max(...values: number[]) {
    return values.length === 0 ?
        0 : Math.max(...values);

};


export function mapStringToNumbers(value: string) {
    return [...value].map(s => (s.charCodeAt(0) - "a".charCodeAt(0)));
}
