function rmDuplicate(arr) {
    return [...new Set(arr)]
}

let arr = [1,2,3,3,4,5,4,4,4,5,5];
console.log(rmDuplicate(arr));