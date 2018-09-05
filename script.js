//model for the nav items
function hover1() {
	var x = document.getElementById("model1");
	x.style.visibility = 'visible';
}
function out1() {
	var x = document.getElementById("model1");
	x.style.visibility = 'hidden';
}
function hover2() {
	var x = document.getElementById("model2");
	x.style.visibility = 'visible';
}
function out2() {
	var x = document.getElementById("model2");
	x.style.visibility = 'hidden';
}
function hover3() {
	var x = document.getElementById("model3");
	x.style.visibility = 'visible';
}
function out3() {
	var x = document.getElementById("model3");
	x.style.visibility = 'hidden';
}
function hover() {
	var x = document.getElementById("logo");
	x.style.visibility = 'visible';
}
function out() {
	var x = document.getElementById("logo");
	x.style.visibility = 'hidden';
}
function fuck() {
	var x = document.getElementById('mobile');
	var y1 = document.getElementById('nav1');
	var y2 = document.getElementById('nav2');
	var y3 = document.getElementById('nav3');
	if(screen.width <= 768){
		x.style.display='flex';
		y1.style.visibility='hidden';
		y2.style.visibility='hidden';
		y3.style.visibility='hidden';
	}
	else{
		x.style.display='none';
		y1.style.visibility='visible';
		y2.style.visibility='visible';
		y3.style.visibility='visible';
	}
}

function open() {
	var x = document.getElementById('blocknav1');
	x.style.display = 'flex';
}