let styles = ["Jazz", "Blues"]

// Add Rock-n-Roll
styles.push("Rock-n-Roll")

// Replace middle value by "Classics", code works for any 
// arrays of odd lengths.
let n = (styles.length - 1) / 2
styles[n] = "Classics"

// Slice the first array element and display
console.log(styles.splice(0,1));

// Add Rap and Reggae to the array
styles.unshift("Rap", "Reggae")