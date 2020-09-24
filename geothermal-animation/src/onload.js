window.onload = function () { arrows() };


function arrows() {
    arrowSize();
    arrowTranspose();
    transposeAreaSize();
}

var pxToVw = 100 / (document.documentElement.clientWidth);
var pxToVh = 100 / (document.documentElement.clientHeight);
var arrow = document.getElementsByClassName("arrow");


function arrowTranspose() {
    var map = document.getElementById("map");

    var picWidth = map.clientWidth;
    var picHeight = map.clientHeight;

    var i;
    for (i = 0; i < arrow.length; i++) {
        var x = arrow[i].style.left.match(/\d+/g);
        var y = arrow[i].style.top.match(/\d+/g);

        var arrowWidth = arrow[i].clientWidth;
        var arrowHeight = arrow[i].clientHeight;

        x = ((x / 14400) * picWidth) - (arrowWidth/2);
        y = ((y / 10800) * picHeight) - (arrowHeight / 2);

        arrow[i].style.left = (x * pxToVw) + 'vw';
        arrow[i].style.top = (y * pxToVh) + 'vh';
    }
}

function arrowSize() {
    var x = 15 * pxToVw;
    var i;
    for (i = 0; i < arrow.length; i++) {
        arrow[i].style.width = (x + 'vw');
    }
}

function transposeAreaSize() {
    var map = document.getElementById("map");
    var picWidth = map.clientWidth;
    var picHeight = map.clientHeight;

    var area = document.getElementsByClassName("area");

    var i;
    for (i = 0; i<area.length; i++) {
        var x1 = area[i].style.left.match(/\d+/g);
        var y1 = area[i].style.top.match(/\d+/g);
        var x2 = area[i].style.width.match(/\d+/g);
        var y2 = area[i].style.height.match(/\d+/g);

        x1 = (x1 / 14400) * picWidth;
        y1 = (y1 / 10800) * picHeight;
        x2 = (x2 / 14400) * picWidth;
        y2 = (y2 / 10800) * picHeight; 

        area[i].style.left = (x1 * pxToVw) + 'vw';
        area[i].style.top = (y1 * pxToVh) + 'vh';
        area[i].style.width = (x2 * pxToVw) + 'vw';
        area[i].style.height = (y2 * pxToVh) + 'vh';
        
    }
}