/**
 * Removes an item by removing the last item and inserting it in its place. Should only be used when the order of
 * elements is not important.
 */
export function removeIndexOutOfOrder<T>(target: Array<T>, index: number): number
{
    console.assert(index < target.length, "Index out of bounds!");
    const last = target.pop();

    // do not remove if it was the last element
    if (target.length !== index)
        target[index] = last;

    return index;
}

/**
 * Removes multiple indices out of order.
 */
export function removeIndicesOutOfOrder<T>(target: Array<T>, indices: number[])
{
    // sorting them in descending order makes them easy to delete optimally. Make sure not to modify the original
    // array, we don't know if it's still used.
    const sorted = indices.slice().sort((a, b) => b - a);

    for (let i of sorted) {
        removeIndexOutOfOrder(target, i);
    }

    return target;
}

/**
 * Unsafely removes an item by removing the last item and inserting it in its place. Should only be used when the
 * order of elements is not important. It returns the index of the object that was removed.
 */
export function removeElementOutOfOrder<T>(target: Array<T>, elm: T): number
{
    const last = target.pop();

    if (last === elm) {
        return target.length;
    }
    else {
        let index = target.indexOf(elm);

        if (index === -1) {
            target.push(last);
            throw new Error("Removing component that's not present");
        }

        target[index] = last;
        return index;
    }
}