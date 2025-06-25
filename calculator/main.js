var dis = document.getElementById('dissplay');
var pff = 0;
var eq = 0;
var res;

document.getElementById('DEC').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += ".";
};

document.getElementById('ZER').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "0";
};

document.getElementById('MOD').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "%";
};

document.getElementById('EQW').onclick = function() { 
	 if(dis.innerHTML.includes("\n")){dis.innerHTML = dis.innerHTML.slice(0, dis.innerHTML.indexOf("\n"));}
	 if(pff == 1){dis.innerHTML += ")"; pff = 0;}
	 res = dis.innerHTML + "\n" + Math.round(eval(dis.innerHTML) * 100) / 100;
	 dis.innerHTML = res;
	 eq = 1;
};


document.getElementById('ONE').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "1";
};

document.getElementById('TWO').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "2";
};

document.getElementById('THR').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "3";
};

document.getElementById('DIV').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "/";
};


document.getElementById('FOR').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "4";
};

document.getElementById('FIV').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "5";
};

document.getElementById('SIX').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "6";
};

document.getElementById('MUL').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "*";
};


document.getElementById('SEV').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "7";
};

document.getElementById('EIG').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "8";
};

document.getElementById('NIN').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "9";
};

document.getElementById('MIN').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "-";
};


document.getElementById('CE').onclick = function() {
	 dis.innerHTML = "";
	 pff = 0;
};

document.getElementById('DEL').onclick = function() {
	 Press();
	 if(dis.innerHTML.charAt(dis.innerHTML.length - 1) == '('){pff = 0;}
	 if(dis.innerHTML.charAt(dis.innerHTML.length - 1) == ')'){pff = 1;}
	 dis.innerHTML = dis.innerHTML.slice(0, dis.innerHTML.length - 1);
};

document.getElementById('PER').onclick = function() { 
	 Press();
	 if(!Overflow()){
	 if(pff == 0){dis.innerHTML += "("; pff = 1;} 
	 else {dis.innerHTML += ")"; pff = 0;}
	 }
};

document.getElementById('PLUS').onclick = function() {
	 Press();
	 if(!Overflow())
	 dis.innerHTML += "+";
};

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
