function isFloat(n){
	return Number(n) === n && n % 1 !== 0;
}

var A = [];
var O = [];
var B = [];
var R = [];
var Inp = [];

var n = 1,Si = 1;

var numOfQ = 20;
var max = 20;

var started = false;
var time;

var tic = 0;
//~~~~~~~~~~~~~~~

function NP(){
	var a,o,b,r;
	
	Inp[n-1] = document.quiz.ans.value;
	document.quiz.ans.value = "";
	
	if(n == numOfQ){document.getElementById("btn").innerHTML = "Finish Quiz";}
	
	if(n > numOfQ){DisplayResults();}
	
	a = Math.round(Math.random() * (max));
	b = Math.round(Math.random() * (max));
	o = Math.round(Math.random() * 3); //0 + | 1 - | 2 * | 3 /
	
	switch(o){
		case 0:
		r = a + b;
		o = "+";
		document.getElementById("dis").innerHTML = a + " + " + b;
		break;
		case 1:
		r = a - b;
		o = "-";
		document.getElementById("dis").innerHTML = a + " - " + b;
		break;
		case 2:
		r = a * b;
		o = "*"
		document.getElementById("dis").innerHTML = a + " * " + b;
		break;
		case 3:
		r = a / b;
		o = "/";
		
		while(isFloat(r)){
			a = Math.round(Math.random() * (max + 1));
			b = Math.round(Math.random() * (max + 1));
			r = a / b;
		}
		
		document.getElementById("dis").innerHTML = a + " / " + b;
		break;
		default:
		console.error();
	}
	
	//~~~~
	
	document.getElementById("counter").innerHTML = n + "/" + numOfQ;
	
	A[n] = a;
	O[n] = o;
	B[n] = b;
	R[n] = r;
	
	n++;
	Si += 4;
}

document.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		NP();
	}
});

//~~~~~~~~~~~~~~~

function DisplayResults() {
	Start();
	
	var resDiv = document.getElementById("res");
	var score = 0;
	
	document.getElementById("test").style.display = "none";
	document.getElementById("counter").style.display = "none";
	resDiv.style.display = "block";
	
	for(let i = 1; i <= numOfQ; i++){
		var row = document.getElementById("tab").insertRow(-1);
		var c1 = row.insertCell(0);
		var c2 = row.insertCell(1);
		var c3 = row.insertCell(2);
		
		c1.innerHTML = A[i] + " " + O[i] + " " + B[i];
		c2.innerHTML = R[i];
		c3.innerHTML = Inp[i];
		
		if(Inp[i] != R[i]){
			row.style.color = "red";
			if(i % 2 == 1)
				row.style.backgroundColor = "#ffd6d6";
			else
				row.style.backgroundColor = "#ffbdbd";
		}else
			score++;
	}
	
	document.getElementById("scoreDis").innerHTML = "Your scire is : " + score + "/" + numOfQ;
	
	document.getElementById("timeDis").innerHTML = "Your time is : " + document.getElementById("timer").innerHTML;
}

//~~~~~~~~~~~~~~~

function keepTime(){
	++tic;
	
	var sec = tic % 60;
	var min = (tic - sec) / 60;
	
	var dis = document.getElementById("timer");
	
	if(min < 10)
		dis.innerHTML = "0" + min + ":";
	else
		dis.innerHTML = min + ":";
		
	if(sec < 10)
		dis.innerHTML += "0" + sec;
	else
		dis.innerHTML += sec;
}

//~~~~~~~~~~~~~~~

function Start(){
	document.quiz.ans.focus();

	document.getElementById("startScreen").style.display = "none";
	document.getElementById("res").style.display = "none";
	document.getElementById('counter').style.display = "block";
	document.getElementById("test").style.display = "block";
	
	if(!started){
		time = setInterval(keepTime, 1000);
		started = true;
	} else {
		clearInterval(time);
	}
}