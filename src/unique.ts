/**
 * Returns a new array with unique values from the original array (ie: duplicates removed).
 *
 * @param arr The array to be filtered.
 * @param clone An optional boolean to indicate that the original array should be cloned. If not set to true, the
 * original array will be sorted!
 * @param compareFunc An optional compare function. Required if the array does not contain primitives. Sort function
 * is the same as a regular array sort function, where 0 is returned when the elements are considered equal.
 */
export function unique<T>(arr: Array<T>, clone: boolean = false, compareFunc?: (a:T, b:T) => number): Array<T>
{
    if (clone) arr = arr.concat();

    let filter;
    if (compareFunc)
        filter = (elm, i) => !i || compareFunc(arr[i], arr[i - 1]);
    else
        filter = (elm, i) => !i || elm !== arr[i - 1];

    return arr.sort(compareFunc).filter(filter);
}