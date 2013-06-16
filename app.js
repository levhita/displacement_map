window.onload = start;

var imageMap = $("#img-map")[0];
var imageSource = $("#img-source")[0];
var source = $("#source")[0];
var map = $("#map")[0];
var canvas = $("#canvas")[0];
var filter, gui;

function start() {
	createSource();
	createMap();
	createFilter();
	draw(canvas.getContext("2d"));
}

function createSource() {
	var context = source.getContext("2d");
	context.drawImage(imageSource, 0, 0, imageSource.width,  imageSource.height);
}

function createMap() {
	var context = map.getContext("2d");
	context.drawImage(imageMap, 0, 0, imageMap.width,  imageMap.height);
}

function RGBToCSS(r, g, b) {
	var hex = r << 16 | g << 8 | b;
	var str = hex.toString(16);
	while (str.length < 6) str = "0" + str;
	return "#" + str.toUpperCase();
}

function createFilter() {
	filter = new filters.DisplacementMap(source, map, canvas);
}
var move=1; var x=0;
var movey=1; var y=0;
function draw(ctx) {
  filter.draw();
	

  setTimeout(draw, 1000/100, ctx);
  filter.scaleY=y; y=y+movey;
  if(y<-8){movey=1}; if(y>8){movey=-1};
  filter.scaleX=x; x=x+move;
  if(x<-8){move=1}; if(x>8){move=-1};
};



