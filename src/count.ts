/**
 * Returns the number of elements in a (sparse) Array.
 */
export function count<T>(arr: Array<T>)
{
    return arr.reduce(x => x+1, 0);
}