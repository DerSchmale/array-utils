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
- `shuffle`: Randomizes the order of the elements in the array.
- `createWith`: Creates a new array of a given length and initializes every element using the return value of a 
  callback function.