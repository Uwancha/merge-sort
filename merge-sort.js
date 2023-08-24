function mergeSort(list, start = 0, end = list.length - 1) {
    // Base case: If the sublist has only one element, return it
    if (start >= end) {
        return [list[start]];
    }

    // Find the middle index
    const mid = Math.floor((start + end) / 2);

    // Recursively sort the left and right sublists
    const left = mergeSort(list, start, mid);
    const right = mergeSort(list, mid + 1, end);

    // Merge the sorted sublists
    return merge(left, right);
}

function merge(left, right) {
    // Merges two sorted arrays into a single sorted array
    const merged = [];
    let i = 0, j = 0;

    // Compare elements from the left and right arrays and merge them
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Push the remaining elements from the left and right arrays
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}