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
    if (target.length > 0 && last !== target[index])
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
        removeIndexOutOfOrder(target, sorted[i]);
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

export { removeElementOutOfOrder, removeIndexOutOfOrder, removeIndicesOutOfOrder, shuffle };
