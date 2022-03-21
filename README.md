# array-utils
A Typescript library containing some useful array functionality.

## building

Run `npm install` and `npm run build`.

## contents

- `removeIndexOutOfOrder`: Removes an item by removing the last item and inserting it in its place. Should only be used 
  when the order of elements is not important.
- `removeIndicesOutOfOrder`: Removes multiple indices out of order.
- `removeElementOutOfOrder`: Unsafely removes an item by removing the last item and inserting it in its place. Should 
  only be used when the order of elements is not important. It returns the index of the object that was removed.
- `removeAllElements`: Removes all elements from the array with the given value, keeping the order.
- `removeIf`: Removes all elements for which the predicate function returns true.
- `shuffle`: Randomizes the order of the elements in the array.
- `createWith`: Creates a new array of a given length and initializes every element using the return value of a 
  callback function.
- `pickRandom`: Returns a random element from the array.
- `transform`: Replaces every element of an array in-place using a transform function.
- `equals`: Checks if two arrays are equal.
- `count`: Returns the number of elements in a (sparse) Array.
- `unique`: Returns a new array with unique values from the original array (ie: duplicates removed).
- `zip`: Loops through two Arrays in lock-step and creates a new Array based on a populated with the results of calling
  a provided function on every respective element in the provided arrays.