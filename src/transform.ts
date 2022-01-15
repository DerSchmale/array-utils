import { TypedArray } from "./types";

export function transform<T>(target: Array<T>, func: (e: T) => T, start?: number, end?: number);
export function transform(target: TypedArray, func: (e: number) => number, start?: number, end?: number);

/**
 * Replaces every element element of an array with the result of a transformation function.
 *
 * @param target The Array to transform.
 * @param func A function that takes the current element and returns the new value.
 * @param start An optional start index into the array. Defaults to 0.
 * @param end An optional end index into the array. Defaults to the length of the array.
 */
export function transform(target: any, func: (e: any) => any, start: number = 0, end: number = target.length)
{
    for (let i = start; i < end; ++i) {
        target[i] = func[i];
    }
}