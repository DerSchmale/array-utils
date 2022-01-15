import { TypedArray } from "./types";

export function pickRandom<T>(array: T[]): T;
export function pickRandom(array: TypedArray): number;
export function pickRandom(array: any): any
{
    const i = Math.floor(array.length * Math.random());
    return array[i];
}