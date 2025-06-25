const canvas = document.getElementById("area");
const ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);

function start(event){
	canvas.addEventListener('mousemove', draw);
	reposition(event);
}

function reposition(e) {
	coord.x = e.clientX - canvas.offsetLeft;
  coord.y = e.clientY - canvas.offsetTop;
}

function stop(){
	canvas.removeEventListener('mousemove', draw);
}

function draw(){
	ctx.beginPath();
	ctx.lineWidth = document.getElementById('thick').value;
	ctx.lineCap = "round";
	ctx.strokeStyle = document.getElementById('cPick').value;
	ctx.moveTo(coord.x,coord.y);
	reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

function Clear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}