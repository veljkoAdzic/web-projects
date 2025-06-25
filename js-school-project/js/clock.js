//Претвара степени во радијани
function dtr(d){
	return (((d - 90) / 180) * Math.PI);
}
//~

var sColour = "#3046C5";
var mColour = "#8C6179";
var hColour = "#F29E6D";
var lw = 9;

//Поставка за canvas елемент
var can = document.getElementById("canvas");
var ctx = can.getContext('2d');
//~

var W = can.width;  //Висина
var H = can.height; //Должина

ctx.translate(W/2, H/2); //Поставува кординати (0,0) во центар


setInterval(draw, 1000); //Анимирање на часовникот

//Исцртување на часовник
function draw() {
	ctx.clearRect(-1*(W/2),-1*(H/2),W,H); //Бришење на се исцртано
	sArc(); //L43
	mArc(); //L58
	hArc(); //L73


	sHand(); //L89
	mHand(); //L109
	hHand(); //L129
	dot();   //L149

	display(); //L158
}
//~

//Исцртување на кружница за секунди
function sArc(){
	var now = new Date(); 	   //Заземање системско време
	var s = now.getSeconds();  //Заземање секунди од системско време
	var sAn = (s * 6) + 0.7;   //Пресметка на агол на кружницата

	ctx.beginPath();
	ctx.strokeStyle = sColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.arc(0, 0, (W/2 * 0.9), dtr(0), dtr(sAn)); //L2
	ctx.stroke();
}
//~

//Исцртување на кружница за минути
function mArc(){
	var now = new Date(); 	   //Заземање системско време
	var m = now.getMinutes();  //Заземање минути од системско време
	var mAn = (m * 6) + 0.7;   //Пресметка на агол на кружницата

	ctx.beginPath();
	ctx.strokeStyle = mColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.arc(0, 0, (W/2 * 0.825), dtr(0), dtr(mAn)); //L2
	ctx.stroke();
}
//~

//Исцртување на кружница за часови
function hArc(){
	var now = new Date(); 	      //Заземање системско време
	var h = now.getHours() % 12;  //Заземање часови од системско време и претварање во 12 часовен формат
	var hAn = (h * 30) + 0.7;     //Пресметка на агол на кружницата

	ctx.beginPath();
	ctx.strokeStyle = hColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.arc(0, 0, (W/2 * 0.755), dtr(0), dtr(hAn)); //L2
	ctx.stroke();
}
//~


//Исцртување на стрелка за секунди
function sHand(){
	var now = new Date(); 	   //Заземање системско време
	var s = now.getSeconds();  //Заземање секунди од системско време
	var sAn = (s * 6) - 90.7;   //Пресметка на агол

	var l = W/2 * 0.675;
	var sX = -l * Math.sin(dtr(sAn)); //L2
	var sY = l * Math.cos(dtr(sAn)); //L2

	ctx.beginPath();
	ctx.strokeStyle = sColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.lineTo(sX,sY);
	ctx.stroke();
}
//~

//Исцртување на стрелка за минути
function mHand(){
	var now = new Date(); 	   //Заземање системско време
	var m = now.getMinutes();  //Заземање минути од системско време
	var mAn = (m * 6) - 90.7;   //Пресметка на агол

	var l = W/2 * 0.6;
	var mX = -l * Math.sin(dtr(mAn)); //L2
	var mY = l * Math.cos(dtr(mAn)); //L2

	ctx.beginPath();
	ctx.strokeStyle = mColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.lineTo(mX,mY);
	ctx.stroke();
}
//~

//Исцртување на стрелка за часови
function hHand(){
	var now = new Date(); 	   //Заземање системско време
	var h = now.getHours() % 12;  //Заземање часови од системско време
	var hAn = (h * 30) - 90.7;   //Пресметка на агол

	var l = W/2 * 0.4;
	var hX = -l * Math.sin(dtr(hAn)); //L2
	var hY = l * Math.cos(dtr(hAn)); //L2

	ctx.beginPath();
	ctx.strokeStyle = hColour;
	ctx.lineWidth = lw;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.lineTo(hX,hY);
	ctx.stroke();
}
//~

//Исцртување точка
function dot(){
	ctx.beginPath();
	ctx.arc(0, 0, lw*0.7, 0 , 2 * Math.PI);
  	ctx.fillStyle = "#333";
  	ctx.fill();
}
//~

//Дигитален приказ на времето
function display(){
	var now = new Date(); 	   //Заземање системско време
	var s = now.getSeconds();  //Заземање секунди од системско време
	var m = now.getMinutes();  //Заземање минути од системско време
	var h = now.getHours();    //Заземање часови од системско време

	var _s,_m,_h;

	if(s < 10){_s = "0" + s;}
	else{_s = s;}

	if(m < 10){_m = "0" + m;}
	else{_m = m;}

	if(h < 10){_h = "0" + h;}
	else{_h = h;}

	document.getElementById('display').innerHTML = _h + ":" + _m + ":" + _s;
}
//~

