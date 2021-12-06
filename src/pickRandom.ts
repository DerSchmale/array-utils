export function pickRandom<T>(array: T[]): T
{
    const i = Math.floor(array.length * Math.random());
    return array[i];
}