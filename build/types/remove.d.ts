/**
 * Removes an item by removing the last item and inserting it in its place. Should only be used when the order of
 * elements is not important.
 */
export declare function removeIndexOutOfOrder<T>(target: Array<T>, index: number): number;
export declare function removeElementOutOfOrder<T>(target: Array<T>, elm: T): number;
