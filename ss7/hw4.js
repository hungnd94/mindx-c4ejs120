const arr = [];

var moreInput = true;

while (moreInput) {
    newNum = prompt("Add a new number: ");
    if (!newNum) {
        moreInput = false; // Check for Cancel/ Esc (no input)
    } else {
        newNum = parseFloat(newNum);    // If there is an input, check if it's a number
        if (isNaN(newNum)) {
            moreInput = false;
        } else {
            arr.push(newNum);
        }
    }
    
}

const reducer = (accumulator, currentVal) => accumulator + currentVal;
console.log(arr.reduce(reducer));