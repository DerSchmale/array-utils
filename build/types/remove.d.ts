/**
 * Removes an item by removing the last item and inserting it in its place. Should only be used when the order of
 * elements is not important.
 */
export declare function removeIndexOutOfOrder<T>(target: Array<T>, index: number): number;
/**
 * Removes multiple indices out of order.
 */
export declare function removeIndicesOutOfOrder<T>(target: Array<T>, indices: number[]): T[];
/**
 * Unsafely removes an item by removing the last item and inserting it in its place. Should only be used when the
 * order of elements is not important. It returns the index of the object that was removed.
 */
export declare function removeElementOutOfOrder<T>(target: Array<T>, elm: T): number;
/**
 * Removes all elements from the array with the given value, keeping the order.
 */
export declare function removeAllElements<T>(target: Array<T>, value: T): void;
/**
 * Removes all elements for which the predicate function returns true.
 */
export declare function removeIf<T>(target: Array<T>, func: (T: any) => boolean): void;
