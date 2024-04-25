function showColor() {
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    var colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}