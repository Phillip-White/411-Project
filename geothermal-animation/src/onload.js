window.onload = function () { arrows() };
const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;
const PxToVw = 100 / screenWidth;
const PxToVh = 100 / screenHeight;

function arrows() {
    arrowWidth();
    arrowLocation();
}



function arrowWidth() {
    var x = 15 * PxToVw;
    document.getElementById("arrow").style.width = x + 'vw';
}

function arrowLocation() {
    var x = 6545 / 14400 * screenWidth * .78;
    var y = 3400 / 10800 * document.getElementById("map").clientHeight;

    document.getElementById("arrow").style.position = "absolute";

    document.getElementById("arrow").style.left = (x - 7) * PxToVw + 'vw';
    document.getElementById("arrow").style.top = y * PxToVh + 'vw';
}