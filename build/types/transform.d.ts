import { TypedArray } from "./types";
export declare function transform<T>(target: Array<T>, func: (e: T) => T, start?: number, end?: number): any;
export declare function transform(target: TypedArray, func: (e: number) => number, start?: number, end?: number): any;
