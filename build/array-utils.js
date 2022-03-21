var ArrayUtils = (function (exports) {
    'use strict';

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
    /**
     * Removes all elements from the array with the given value, keeping the order.
     */
    function removeAllElements(target, value) {
        for (var index = target.indexOf(value); index >= 0; index = target.indexOf(value)) {
            target.splice(index, 1);
        }
    }
    /**
     * Removes all elements for which the predicate function returns true.
     */
    function removeIf(target, func) {
        // loop backwards
        for (var index = target.length - 1; index >= 0; --index) {
            if (func(target[index]))
                target.splice(index, 1);
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

    function equals(a, b) {
        var length = a.length;
        if (a.length !== b.length)
            return false;
        for (var i = 0; i < length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }

    /**
     * Returns the number of elements in a (sparse) Array.
     */
    function count(arr) {
        return arr.reduce(function (x) { return x + 1; }, 0);
    }

    /**
     * Returns a new array with unique values from the original array (ie: duplicates removed).
     *
     * @param arr The array to be filtered.
     * @param clone An optional boolean to indicate that the original array should be cloned. If not set to true, the
     * original array will be sorted!
     * @param compareFunc An optional compare function. Required if the array does not contain primitives. Sort function
     * is the same as a regular array sort function, where 0 is returned when the elements are considered equal.
     */
    function unique(arr, clone, compareFunc) {
        if (clone === void 0) { clone = false; }
        if (clone)
            arr = arr.concat();
        var filter;
        if (compareFunc)
            filter = function (elm, i) { return !i || compareFunc(arr[i], arr[i - 1]); };
        else
            filter = function (elm, i) { return !i || elm !== arr[i - 1]; };
        return arr.sort(compareFunc).filter(filter);
    }

    /**
     * Loops through two Arrays in lock-step and creates a new Array based on a populated with the results of calling a
     * provided function on every respective element in the provided arrays. If the provided arrays are of different
     * lengths, only the minimal length is used.
     *
     * @param a The first array
     * @param b The second array
     * @param merger A function that returns a new element based on two elements
     */
    function zip(a, b, merger) {
        var len = Math.min(a.length, b.length);
        var arr = new Array(len);
        for (var i = 0; i < len; ++i) {
            arr[i] = merger(a[i], b[i]);
        }
        return arr;
    }

    exports.count = count;
    exports.createWith = createWith;
    exports.equals = equals;
    exports.pickRandom = pickRandom;
    exports.removeAllElements = removeAllElements;
    exports.removeElementOutOfOrder = removeElementOutOfOrder;
    exports.removeIf = removeIf;
    exports.removeIndexOutOfOrder = removeIndexOutOfOrder;
    exports.removeIndicesOutOfOrder = removeIndicesOutOfOrder;
    exports.shuffle = shuffle;
    exports.transform = transform;
    exports.unique = unique;
    exports.zip = zip;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
