var form = [];

function Store() {
	window.alert("Ви благодарам за прашањето.");

	var P = document.F1.pras.innerHTML;
	var M = document.F1.mail.value;

	if(P.startsWith(" ") || P.endsWith(" ")){
		P = P.triim();
	}

	if(M.startsWith(" ") || M.endsWith(" ")){
		M = M.triim();
	}

	form[0] = P;
	form[1] = M;
}