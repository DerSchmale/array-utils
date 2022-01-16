/**
 * Returns the number of elements in a (sparse) Array.
 */
export function count<T>(arr: Array<T>): number
{
    return arr.reduce(x => x+1, 0);
}