//drawing
var canvas;
var ctx;
windows.onload = function() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(10,10,50,50)
}