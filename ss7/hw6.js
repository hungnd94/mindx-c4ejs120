function camelize(s) {
    var finish = false;
    while (!finish) {
        indexToChange = s.search('-');
        if (indexToChange == -1) {
            return s
        }
        s = s.replace('-' + s[indexToChange + 1], s[indexToChange + 1].toUpperCase());
    }
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));