const s = prompt("Enter a string to be capitalized: ");

// Tách string thành các chữ để viết hoa
var words = s.split(' ');

// Viết hoa từng chữ bằng map
function cap(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

var wordsCapitalized = words.map(cap);

// Join lại mảng thành string kết quả
const result = wordsCapitalized.join(' ');
console.log(result);