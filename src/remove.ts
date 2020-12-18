/**
 * Removes an item by removing the last item and inserting it in its place. Should only be used when the order of
 * elements is not important.
 */
export function removeIndexOutOfOrder<T>(target: Array<T>, index: number): number
{
    console.assert(index < target.length, "Index out of bounds!");
    const last = target.pop();
    if (target.length > 0 && last !== target[index])
        target[index] = last;

    return index;
}

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