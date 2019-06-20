var score = 0;
var progressBar = 0;
var question1 = 0;
var question2 = 0;
var question3 = 0;
var question4 = 0;
var question5 = 0;
var question6 = 0;
var question7 = 0;
var question8 = 0;
var question9 = 0;
var question10 = 0;

function move() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question1 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question1++
		  elem.style.width = progressBar + "%";
		}
	  }
}


function move2() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question2 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question2++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move3() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question3 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question3++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move4() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question4 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question4++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move5() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question5 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question5++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move6() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question6 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question6++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move7() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question7 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question7++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move8() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question8 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question8++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move9() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question9 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question9++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function move10() {
	  var elem = document.getElementById("myBar");   
	  var width = 0;
	  var id = setInterval(frame, 10);
	  function frame() {
		if (width >= 10 || question10 == 10) {
		  clearInterval(id);
		} else {
		  width++; 
		  progressBar++;
		  question10++
		  elem.style.width = progressBar + "%";
		}
	  }
}

function test() {
	var rightAnswer1 = document.getElementsByName("quest1");
	for(var i = 0; i < rightAnswer1.length; i++) {
		if(rightAnswer1[i].checked){
			if(rightAnswer1[i].value == "80"){
				score++;
			}
		}
	}
	
	var rightAnswer2 = document.getElementsByName("quest2");
	for(var i = 0; i < rightAnswer2.length; i++) {
		if(rightAnswer2[i].checked){
			if(rightAnswer2[i].value == "time"){
				score++;
			}
		}
	}
	
	var rightAnswer3 = document.getElementsByName("quest3");
	for(var i = 0; i < rightAnswer3.length; i++) {
		if(rightAnswer3[i].checked){
			if(rightAnswer3[i].value == "443"){
				score++;
			}
		}
	}
	
	var rightAnswer4 = document.getElementsByName("quest4");
	for(var i = 0; i < rightAnswer4.length; i++) {
		if(rightAnswer4[i].checked){
			if(rightAnswer4[i].value == "newcastle"){
				score++;
			}
		}
	}
	
	var rightAnswer5 = document.getElementsByName("quest5");
	for(var i = 0; i < rightAnswer5.length; i++) {
		if(rightAnswer5[i].checked){
			if(rightAnswer5[i].value == "6881"){
				score++;
			}
		}
	}
	
	var rightAnswer6 = document.getElementsByName("quest6");
	for(var i = 0; i < rightAnswer6.length; i++) {
		if(rightAnswer6[i].checked){
			if(rightAnswer6[i].value == "qbittorrent"){
				score++;
			}
		}
	}
	
	var rightAnswer7 = document.getElementsByName("quest7");
	for(var i = 0; i < rightAnswer7.length; i++) {
		if(rightAnswer7[i].checked){
			if(rightAnswer7[i].value == "21"){
				score++;
			}
		}
	}
	
	var rightAnswer8 = document.getElementsByName("quest8");
	for(var i = 0; i < rightAnswer8.length; i++) {
		if(rightAnswer8[i].checked){
			if(rightAnswer8[i].value == "20"){
				score++;
			}
		}
	}
	
	var rightAnswer9 = document.getElementsByName("quest9");
	for(var i = 0; i < rightAnswer9.length; i++) {
		if(rightAnswer9[i].checked){
			if(rightAnswer9[i].value == "transmit"){
				score++;
			}
		}
	}
	
	var rightAnswer10 = document.getElementsByName("quest10");
	for(var i = 0; i < rightAnswer10.length; i++) {
		if(rightAnswer10[i].checked){
			if(rightAnswer10[i].value == "TCP"){
				score++;
			}
		}
	}
	
	alert("your final score is: " + score + "/10");
}