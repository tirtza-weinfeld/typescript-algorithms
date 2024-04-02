/**
 * @param values Numeric expressions to be evaluated.
 * @returns 
 * * the larger of a set of supplied numeric expressions. 
 * * zero if the set is empty
 */
export function max(...values: number[]) {
    return values.length === 0 ?
        0 : Math.max(...values);
};

/**
 * Returns the  base logarithm of a number.
 * @param base 
 * @param x A numeric expression.
 */
export function log(x: number, base?: number) {
    return Math.log(x) /
        Math.log(base ?? Math.E);
}