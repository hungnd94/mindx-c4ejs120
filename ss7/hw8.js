function filterRangeInPlace(arr, a, b) {
    let i = 0, j = 0;
    while (i < arr.length) {
        if (arr[i] >= a && arr[i] <= b) {
            arr[j] = arr[i];
            j++
        }
        i++
    }
    arr.length = j;
}

let arr = [5,3,8,1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);