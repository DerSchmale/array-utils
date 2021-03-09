export function createWith<T>(length: number, creator: (i: number) => T): Array<T>
{
    const arr = new Array<T>(length);

    for (let i = 0; i < length; ++i) {
        arr[i] = creator(i);
    }

    return arr;
}