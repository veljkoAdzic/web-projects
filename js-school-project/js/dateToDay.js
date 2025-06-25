let total,ly,doom,diff,z,r;
//
function Calculate(){
	var d = Number(document.INPUT.day.value);
	var m = Number(document.INPUT.month.value);
	var _y = document.INPUT.year.value;

	var y = Number(_y.slice(-2));
	var c = (Number(_y) - y) / 100;

	total;
	//
	switch (c % 4) {
		case 0:
		total = 2;
		break;
		
		case 1:
		total = 0;
		break;
		
		case 2:
		total = 5;
		break;
		
		case 3:
		total = 3;
		break;
	}
	//~

	total += Math.floor(y / 12);
	total += (y % 12) + Math.floor((y % 12) / 4);

	//leap year
	ly = 0;
	if((c % 4 == 0 && y == 0) || (y > 0 && y % 4 == 0)){ly = 1;}
	//~

	doom = 0;
	//doomsday calculator
	switch(m){
    	case 1:
      		doom = 3 + ly;
    	break;
    	case 2:
    	  	doom = 28 + ly;
    	break;
    	case 3:
	      	doom = 14;
    	break;
    	case 4:
    	  	doom = 4;
    	break;
    	case 5:
    	  	doom = 9;
    	break;
    	case 6:
    	  	doom = 6;
    	break;
    	case 7:
    	  	doom = 11;
    	break;
    	case 8:
    	  	doom = 8;
    	break;
    	case 9:
    	  	doom = 5;
    	break;
    	case 10:
    	  	doom = 10;
    	break;
    	case 11:
    	  	doom = 7;
    	break;
    	case 12:
    	  	doom = 12;
    	break;
	}
	//~

	diff = d - doom;

	total = total % 7;

	diff = diff % 7;

	z = total + diff;
	if(z<0){z+=7;}

	switch(z%7){
		case 1:
			r = "Понеделник";
		break;
		case 2:
			r = "Вторник";
		break;
		case 3:
			r = "Среда";
		break;
		case 4:
			r = "Четврток";
		break;
		case 5:
			r = "Петок";
		break;
		case 6:
			r = "Сабота";
		break;
		case 0:
			r = "Недела";
		break;
	}

	if(Error(d,m,ly)){
		window.alert("Внесените вредности не се правилни!");
	}else{
		document.getElementById('res').innerHTML = "На тој датум се паѓа: <b>" + r + "</b>";
	}
	//window.alert(r); //test
}
//~

//Проверка за неправилно додадени информации
function Error(D,M,L){
	if(M == 0 || D < 1){
		return true;
	}else{

	switch(M){
		
		case 1: 
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			if(D>31){
				return true;
			}else{
				return false;
			}
		break;
		
		case 4: 
		case 6:
		case 9:
		case 11:
			if(D>30){
				return true;
			}else{
				return false;
			}
		break;
		
		case 2:
			if(D>(28+L)){
				return true;
			} else{
				return false;
			}
		break;
	}

	}
}
//~