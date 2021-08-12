function mergeArraysDecrease(arr1, arr2) {
    const result = [];
    while (arr1.length && arr2.length) {
        result.push(arr1[0] > arr2[0] ? arr1.shift() : arr2.shift())
    }
    while (arr1.length) {
        result.push(arr1.shift())
    }
    while (arr2.length) {
        result.push(arr2.shift())
    }
    return result
}

function mergeSortDecrease(arr) {
    // We use merge sort to sort array in decreasing order
    if (arr.length < 2) {
        return arr
    }
    const midPoint = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint, arr.length);
    const sortedLeft = mergeSortDecrease(leftArr);
    const sortedRight = mergeSortDecrease(rightArr);
    return mergeArraysDecrease(sortedLeft, sortedRight)
}

let arr = [5,2,1,-10,8];
console.log(mergeSortDecrease(arr));