/**
 * Loops through two Arrays in lock-step and creates a new Array based on a populated with the results of calling a
 * provided function on every respective element in the provided arrays. If the provided arrays are of different
 * lengths, only the minimal length is used.
 *
 * @param a The first array
 * @param b The second array
 * @param merger A function that returns a new element based on two elements
 */
export function zip<R, S, T>(a: Array<R>, b: Array<S>, merger: (a: R, b:S) => T): Array<T>
{
    const len = Math.min(a.length, b.length);
    const arr = new Array<T>(len);
    for (let i = 0; i < len; ++i) {
        arr[i] = merger(a[i], b[i]);
    }
    return arr;
}