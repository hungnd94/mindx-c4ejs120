function filterRange(arr, a, b) {
    const result = arr.filter(num => (num >= a) && (num <= b))
    return result
}

const arr = [1,3,5,7,9,10,13,15];
const a = 4;
const b = 8;
console.log(filterRange(arr, a, b));