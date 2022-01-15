/**
 * Randomizes the order of the elements in the array.
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

/**
 * Removes an item by removing the last item and inserting it in its place. Should only be used when the order of
 * elements is not important.
 */
function removeIndexOutOfOrder(target, index) {
    console.assert(index < target.length, "Index out of bounds!");
    var last = target.pop();
    // do not remove if it was the last element
    if (target.length !== index)
        target[index] = last;
    return index;
}
/**
 * Removes multiple indices out of order.
 */
function removeIndicesOutOfOrder(target, indices) {
    // sorting them in descending order makes them easy to delete optimally. Make sure not to modify the original
    // array, we don't know if it's still used.
    var sorted = indices.slice().sort(function (a, b) { return b - a; });
    for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
        var i = sorted_1[_i];
        removeIndexOutOfOrder(target, i);
    }
    return target;
}
/**
 * Unsafely removes an item by removing the last item and inserting it in its place. Should only be used when the
 * order of elements is not important. It returns the index of the object that was removed.
 */
function removeElementOutOfOrder(target, elm) {
    var last = target.pop();
    if (last === elm) {
        return target.length;
    }
    else {
        var index = target.indexOf(elm);
        if (index === -1) {
            target.push(last);
            throw new Error("Removing component that's not present");
        }
        target[index] = last;
        return index;
    }
}

function createWith(length, creator) {
    var arr = new Array(length);
    for (var i = 0; i < length; ++i) {
        arr[i] = creator(i);
    }
    return arr;
}

function pickRandom(array) {
    var i = Math.floor(array.length * Math.random());
    return array[i];
}

/**
 * Replaces every element element of an array with the result of a transformation function.
 *
 * @param target The Array to transform.
 * @param func A function that takes the current element and returns the new value.
 * @param start An optional start index into the array. Defaults to 0.
 * @param end An optional end index into the array. Defaults to the length of the array.
 */
function transform(target, func, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = target.length; }
    for (var i = start; i < end; ++i) {
        target[i] = func[i];
    }
}

export { createWith, pickRandom, removeElementOutOfOrder, removeIndexOutOfOrder, removeIndicesOutOfOrder, shuffle, transform };
