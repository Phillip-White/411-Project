//create javascript function to assign coords to a var


window.onload = function () { arrows() };


function arrows() {
    arrowLocation(6400, 9284);
}

function arrowLocation(x, y) {
    const arrow = document.getElementById("arrow");
    const map = document.getElementById("map");
    const pxToVw = 100 / (document.documentElement.clientWidth);
    const pxToVh = 100 / (document.documentElement.clientHeight);

    var picWidth = map.clientWidth;
    var picHeight = map.clientHeight;
    var arrowWidth = arrow.clientWidth
    var arrowHeight = arrow.clientHeight

    x = x / 14400 * picWidth;
    y = y / 10800 * picHeight;

    arrow.style.position = "absolute";

    arrow.style.left = ((x - (arrowWidth / 2)) * pxToVw)  + 'vw';
    arrow.style.top = ((y - (arrowHeight / 2)) * pxToVh)  + 'vh';
}