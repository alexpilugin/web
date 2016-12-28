// JavaScript Document
var xPos = 597;
var yPos = 20;
var counter = 0;

function onClick(){

	var hero = document.getElementById("hero");
	hero.style.top = 0;
	hero.style.left = 0;
	
	hero.className = "trans";
	/* http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript */
	//if(!(hero).className.match(/(?:^|\s)trans(?!\S)/) ) { hero.className += "trans"; }
		
	//or: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
	
	counter++;
	if(counter > 11){
		//if((hero).className.match(/(?:^|\s)trans(?!\S)/)){ hero.className.replace( /(?:^|\s)trans(?!\S)/g , '' ); }
		if (hero.className === 'trans') { hero.className = ''; }
		counter = 0;
	}

	var congratulation = document.getElementById("congratulation");

	switch(counter){
		case 0:
			hero.style.position = "absolute";
  			hero.style.top = "20px";
			hero.style.left = "597px";
			hero.style.transform = "scaleX(1)";
			congratulation.style.display = "none";
  			break;
		case 1:
			hero.style.position = "absolute";
  			hero.style.top = "53px";
			hero.style.left = "533px";
  			break;
		case 2:
			hero.style.position = "absolute";
		  	hero.style.top = "20px";
			hero.style.left = "459px";
  			break;
		case 3:
			hero.style.position = "absolute";
		  	hero.style.top = "52px";
			hero.style.left = "395px";
  			break;
		case 4:
			hero.style.position = "absolute";
		  	hero.style.top = "87px";
			hero.style.left = "332px";
  			break;
		case 5:
			hero.style.position = "absolute";
			hero.style.top = "122px";
			hero.style.left = "375px";
			hero.style.transform = "scaleX(-1)";
				break;
		case 6:
			hero.style.position = "absolute";
			hero.style.top = "157px";
			hero.style.left = "439px";
				break;
		case 7:
			hero.style.position = "absolute";
			hero.style.top = "190px";
			hero.style.left = "395px";
			hero.style.transform = "scaleX(1)";
				break;
		case 8:
			hero.style.position = "absolute";
			hero.style.top = "223px";
			hero.style.left = "332px";
				break;
		case 9:
			hero.style.position = "absolute";
			hero.style.top = "256px";
			hero.style.left = "367px";
			hero.style.transform = "scaleX(-1)";
				break;
		case 10:
			hero.style.position = "absolute";
			hero.style.top = "298px";
			hero.style.left = "443px";
				break;
		case 11:
			hero.style.position = "absolute";
			hero.style.top = "331px";
			hero.style.left = "510px";
			congratulation.style.display = "block";
				break;
		}

}


