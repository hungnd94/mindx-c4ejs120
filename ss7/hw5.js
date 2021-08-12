function getMaxSubSum(arr) {
    // We find maximum subarray sum using Kadane Algorithm
    // Computational complexity is O(n)
    var currentMax = Number.NEGATIVE_INFINITY;
    var maxEndingHere = 0;
    for (let i = 0; i < arr.length; i++) {
        maxEndingHere += arr[i];
        if (currentMax < maxEndingHere) {
            currentMax = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return currentMax
}