/**
 * Compares two arrays for equality
 */
import { TypedArray } from "./types";

export function equals<T>(a: Array<T> | TypedArray, b: Array<T> | TypedArray): boolean
{
    const length = a.length;

    if (a.length !== b.length)
        return false;

    for (let i = 0; i < length; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}