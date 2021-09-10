function pickColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = "#" + randomColor;
    alert("Your color is: " + randomColor);
    document.body.style.backgroundColor = randomColor;
}