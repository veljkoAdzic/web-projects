var inp,conv,i,temp,l,x,con;

function Conv() {
	inp = document.getElementById('slush').value;
  Convert();
  document.getElementById('derp').innerHTML = inp;
}

function Convert() {
	l = inp.length;
  for(i = 0; i < l; i++) {
  	x = inp.charAt(i);
    switch(x){
      case 'A':
      	inp = inp.replace("A", '\u0466');
      break;

      case 'B':
      	inp = inp.replace("B", '\u00DF');
      break;

    	case 'C':
      	inp = inp.replace("C", '\u0186'); //03C2
      break;
      case 'D':
      	inp = inp.replace("D", '\u0394');
      break;
      case 'E':
      	inp = inp.replace("E", '\u018E'); // 03BE
      break;
      case 'F':
      	inp = inp.replace("F", '\u0191');
      break;
      case 'N':
      	inp = inp.replace("N", '\u0418');
      break;
      case 'O':
      	inp = inp.replace("O", '\u047A');//0398
      break;
      case 'R':
      	inp = inp.replace("R", '\u042F');
      break;

      case 'S':
      	inp = inp.replace("S", '\u03E8');
      break;

      case 'T':
      	inp = inp.replace("T", '\u0372');
      break;

      case 'W':
      	inp = inp.replace("W", '\u0428');
      break;
      case 'Y':
      	inp = inp.replace("Y", '\u0423');
      break;
      case 'a':
      	inp = inp.replace("a", '\u03B1');
      break;
      case 'b':
      	inp = inp.replace("b", '\u0463'); // 03B2
      break;
      case 'c':
      	inp = inp.replace("c", '\u03C2');
      break;
      case 'd':
      	inp = inp.replace("d", '\u03B4');
      break;
      case 'e':
      	inp = inp.replace("e", '\u0258');// 0292 03B5
      break;

      case 'f':
      	inp = inp.replace("f", '\u01AD');
      break;

      case 'g':
      	inp = inp.replace("g", '\u0260');
      break;
      case 'h':
      	inp = inp.replace("h", '\u043D');
      break;
      case 'k':
      	inp = inp.replace("k", '\u043A');
      break;
      case 'l':
      	inp = inp.replace("l", '|'); //03B9
      break;
      case 'm':
      	inp = inp.replace("m", '\u043C');
      break;
      case 'n':
      	inp = inp.replace("n", '\u03B7');
      break;
      case 'o':
      	inp = inp.replace("o", '\u03B8');
      break;
      case 'p':
      	inp = inp.replace("p", '\u03C1');
      break;
      case 'r':
      	inp = inp.replace("r", '\u027C');// 044F
      break;
      case 't':
      	inp = inp.replace("t", '\u03C4');
      break;
      case 'u':
      	inp = inp.replace("u", '\u03BC');
      break;
      case 'v':
      	inp = inp.replace("v", '\u02C5');
      break;
      case 'w':
      	inp = inp.replace("w", '\u03C9');
      break;
      case 'x':
      	inp = inp.replace("x", '\u03C7'); 
      break;
      case 'z':
      	inp = inp.replace("z", '\u0240'); //03B6
      break;
    }
  }
}