function alternateSums(array) {
    let oddSum = 0;
    let evenSum = 0;
    for (let index = 0; index < array.length; index += 2) {
        oddSum += array[index];
    }
    for (let index = 1; index < array.length; index += 2) {
        evenSum += array[index];
    }
    return [oddSum, evenSum];
} 

let a = [60, 40, 55, 75, 64];
console.log(alternateSums(a));