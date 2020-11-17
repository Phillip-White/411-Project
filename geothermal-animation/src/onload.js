var pxToVw = 100 / (document.documentElement.clientWidth);
var pxToVh = 100 / (document.documentElement.clientHeight);

export function arrowTranspose(x, y, id) {
    var picWidth = document.getElementById("map").width;
    var picHeight = document.getElementById("map").height;

    var arrowWidth = document.getElementById(id).width;
    var arrowHeight = document.getElementById(id).height;

    x = ((x / 14400) * picWidth) - (arrowWidth / 2);
    y = ((y / 10800) * picHeight) - (arrowHeight / 2);

    document.getElementById(id).style.left = x + "px";
    document.getElementById(id).style.top = y + "px";
}

export function transposeAreaSize() {
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
