function longestStr(inputArr) {
    var n = inputArr.length

    // Step 1: find the maximum length
    var max = -1
    for (let i = 0; i < n; i++) {
        const element = inputArr[i];
        if (element.length > max) {
            max = element.length;
        }
    }

    // Step 2: find all elements with length equal to max length
    let result = [];
    for (let i = 0; i < n; i++) {
        const element = inputArr[i];
        if (element.length == max) {
            result.push(element);
        }
    }
    return result;
}

const arr = ["binh", "hung", "phuoc", "cao", "khanh"];
console.log(longestStr(arr));