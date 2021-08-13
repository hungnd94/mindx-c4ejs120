const s = prompt("Enter a string to reverse: ");
const n = s.length;

var chars = [];

for (let i = 0; i < n; i++) {
    chars.push(s[n-1-i]);    
}

const reversed = chars.join("");
console.log(reversed);