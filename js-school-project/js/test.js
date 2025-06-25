function Funkcija() {
	var T = document.F6.in.value;

	var n = Math.random() * (T.length);
	document.getElementById('N1').innerHTML = T.charAt(n);
	document.getElementById('N2').innerHTML = T.charAt(n);
	
	document.getElementById('r1').innerHTML = (T.indexOf(T.charAt(n)) + 1);
	document.getElementById('r2').innerHTML = (T.lastIndexOf(T.charAt(n)) + 1);

	if(T.endsWith("!?") || T.endsWith("?!")){
		document.getElementById('p2').innerHTML = "Текстот завршува со: <b>Прашалник и извичник</b>";
	} else if(T.endsWith(".")){
		document.getElementById('p2').innerHTML = "Текстот завршува со: <b>Точка</b>";
	} else if(T.endsWith("?")){
		document.getElementById('p2').innerHTML = "Текстот завршува со: <b>Прашалник</b>";
	} else if(T.endsWith("!")){
		document.getElementById('p2').innerHTML = "Текстот завршува со: <b>Извичник</b>";
	} else if(T.endsWith(";")){
		document.getElementById('p2').innerHTML = "Текстот завршува со: <b>Точка запирка</b>";
	} else {
		document.getElementById('p2').innerHTML = "Текстот не завршува со точка, точка запирка, извичник, прашалник или прашалник и извичник.";
	}

	if(T.startsWith("-")){
		document.getElementById('p1').innerHTML = "Текстот почнува ли со цртка? <b>Да</b>";
	}else{
		document.getElementById('p1').innerHTML = "Текстот почнува ли со цртка? <b>Не</b>";
	}
}