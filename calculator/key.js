var dis = document.getElementById('dissplay');
var pff = 0;
var eq = 0;
var res;

window.addEventListener('keydown', (event) => {
	if(event.key === "."){
		Press();
	 	if(!Overflow())
	 	dis.innerHTML += ".";
	}
});


window.addEventListener('keydown', (event) => {
	if(event.key === "0"){
		Press();
		if(!Overflow())
		dis.innerHTML += "0";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "%"){
		Press();
		if(!Overflow())
		dis.innerHTML += "%";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "Enter"){ 
		if(dis.innerHTML.includes("\n")){dis.innerHTML = dis.innerHTML.slice(0, dis.innerHTML.indexOf("\n"));}
		if(pff == 1){dis.innerHTML += ")"; pff = 0;}
		res = dis.innerHTML + "\n" + Math.round(eval(dis.innerHTML) * 100) / 100;
		dis.innerHTML = res;
		eq = 1;
	}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('keydown', (event) => {
	if(event.key === "1"){
		Press();
		if(!Overflow())
		dis.innerHTML += "1";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "2"){
		Press();
		if(!Overflow())
		dis.innerHTML += "2";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "3"){
		Press();
		if(!Overflow())
		dis.innerHTML += "3";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "/"){
		Press();
		if(!Overflow())
		dis.innerHTML += "/";
	}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('keydown', (event) => {
	if(event.key === "4"){
		Press();
		if(!Overflow())
		dis.innerHTML += "4";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "5"){
		Press();
		if(!Overflow())
		dis.innerHTML += "5";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "6"){
		Press();
		if(!Overflow())
		dis.innerHTML += "6";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "*"){
		Press();
		if(!Overflow())
		dis.innerHTML += "*";
	}
});


window.addEventListener('keydown', (event) => {
	if(event.key === "7"){
		Press();
		if(!Overflow())
		dis.innerHTML += "7";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "8"){
		Press();
		if(!Overflow())
		dis.innerHTML += "8";
	}
});
window.addEventListener('keydown', (event) => {
	if(event.key === "9"){
		Press();
		if(!Overflow())
		dis.innerHTML += "9";
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "-"){
		Press();
		if(!Overflow())
		dis.innerHTML += "-";
	}
});


window.addEventListener('keydown', (event) => {
	if((event.key === "Backspace" || event.key === "Delete") && event.ctrlKey){
		dis.innerHTML = "";
		pff = 0;
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "Backspace" || event.key === "Delete"){
		Press();
		if(dis.innerHTML.charAt(dis.innerHTML.length - 1) == '('){pff = 0;}
		if(dis.innerHTML.charAt(dis.innerHTML.length - 1) == ')'){pff = 1;}
		dis.innerHTML = dis.innerHTML.slice(0, dis.innerHTML.length - 1);
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "(" || event.key === ")"){
		Press();
		if(!Overflow()){
		if(pff == 0){dis.innerHTML += "("; pff = 1;} 
		else {dis.innerHTML += ")"; pff = 0;}
	 	}
	}
});

window.addEventListener('keydown', (event) => {
	if(event.key === "+"){
		Press();
		if(!Overflow())
		dis.innerHTML += "+";
	}
});

function Press(){
	if(eq == 1){
		dis.innerHTML = "";
	 	pff = 0;
		eq = 0;
	}
}

function Overflow(){
	if(dis.innerHTML.length > 14){
		return true;
	}
}
