# Merge Sort

This is an implementation of the merge sort algorithm in JavaScript.

## Description

Merge sort is a divide-and-conquer algorithm that works by dividing the input array into smaller sublists, sorting them individually, and then merging them back together to obtain the final sorted array. It has a time complexity of O(n log n), making it an efficient sorting algorithm for large datasets.

## Usage

To use the merge sort algorithm, call the `mergeSort` function and pass an array of comparable elements as the input. The function will return a new array with the elements sorted in ascending order.

```javascript
const array = [5, 2, 9, 1, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 5, 7, 9]
````

## Parameters

- `list` (array): The input array to be sorted.

## Returns

- An array containing the elements from the input array sorted in ascending order.


