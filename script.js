var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');
var colorInput = document.querySelector('#color');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');


var getCoordinates = function (evt) {
	let arr = {};
	let x = evt.offsetX;
	let y = evt.offsetY;

	xCoord.innerText = x;
	yCoord.innerText = y;
};

var system = {
	currentTool : '',
	currentColor : colorInput.value,
	brushSize : 5
};

var renderSystem = function (obj, elem, action) { 
	//obj -> change
	obj[elem] = action; 
};

var switchTool = function (el) {
	console.log(el);
	if (el.id == 'brush') {
		console.log ('brush');
		ctx.fillStyle = colorInput.value;
		return 'brush'
	} else if (el.id == 'notbrush') {
		console.log ('not brush');
		return 'notbrush'
	}
		else 
			return 'notbrush2';

	};

var switchSize = function (list) {
	return list.value
};

var clicker = function (evt) {
	if (evt.target.classList.contains('toolButton') == true) {
		//console.log (`Выбран инструмент ${evt.target.id}`);
		//switchTool(evt.target);
		renderSystem (system, 'currentTool', switchTool (evt.target));
	} else if (evt.target.id == 'sizeSelect') {
		renderSystem (system, 'brushSize', switchSize(evt.target));
	} else if (evt.target.id == 'color') {
		//console.log (`Выбран инструмент color`);
	}
};



var startDraw = function (evt) {
	//зафиксировать нач коорд
	//начать процесс рисования
	if (system.currentTool == 'brush') {
		draw (evt);
	} 
	if (system.currentTool == 'notbrush') {
		ctx.fillStyle = "#FFFFFF";
		draw (evt);
	} 
	if (system.currentTool == 'notbrush2') {
		ctx.clearRect(0, 0, 1000, 800);
	}
	
};

var endDraw = function (evt) {
	console.log('end');
	canvas.onmousemove = null;
};

var draw = function (evt) {
	canvas.onmousemove = function (evt) {
		ctx.fillRect (xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
	}
};

canvas.addEventListener ('mousemove', getCoordinates);
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);
window.addEventListener ('click', clicker);
colorInput.addEventListener('input', setSystemColor);

function setSystemColor(e) {
	system.currentColor = ctx.fillStyle = e.target.value;
}




//ctx.fillRect (x0, y0, width(px), height(px));

// ctx.fillRect (0, 0, 100, 100);

// ctx.fillStyle = 'white';
// ctx.fillRect (50, 50, 100, 100);

//ctx.fillStyle = '#7700ff';
//ctx.fillRect (200, 200, 100, 100);

// ctx.beginPath();
// ctx.strokeStyle = system.currentColor;
// ctx.fillStyle = 'blue';

// ctx.moveTo (100, 100);
// ctx.lineTo (300, 300);
// ctx.moveTo (100, 100);
// ctx.lineTo (300, 100);
// ctx.moveTo (300, 100);
// ctx.lineTo (300, 300);

// ctx.rect (40,100, 50, 50);
// ctx.fill ();
// ctx.stroke ();



//canvas.addEventListener ('click', function (evt) {console.log (evt)} );

// var d = new Date();
// var options = {
// 	year: 'numeric',
// 	month: 'long',
// 	day: 'numeric',
// 	weekday: 'long',
// };

// document.write(d.toLocaleString('ru', options) + '<br>');

function clock() {
	let d = new Date();
	let hrs = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	var options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	};
	if (hrs < 10) hrs = "0" + hrs;
	if (min < 10) min = "0" + min;
	if (sec < 10) sec = "0" + sec;
	current_time = hrs + ':' + min + ':' + sec + '<br>' + (d.toLocaleString('ru', options) + '<br>')
	document.getElementById("current_time").innerHTML = current_time;
	setTimeout("clock()", 1000);
  }
  clock();

