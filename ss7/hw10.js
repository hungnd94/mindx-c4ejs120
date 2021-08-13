function copySorted(arr) {
    let arrClone = [...arr];
    return arrClone.sort()
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);