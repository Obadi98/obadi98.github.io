function myFunction() {
	var body = document.body;
	if(body.scrollTop > 50) {
		document.getElementById("left").style.marginRight = "670px";
        document.getElementById("left").style.paddingTop = "15px";
		document.getElementById("left").style.transition = "all 0.5s";
		document.getElementById("navbar").style.transition = "all 0.5s";
		document.getElementById("navbar").style.border = "0.5px inset white";
		document.getElementById("js").style.transition = "all 0.5s";
		document.getElementById("java1").style.transition = "all 0.5s";
		document.getElementById("java2").style.transition = "all 0.5s";
		document.getElementById("java3").style.transition = "all 0.5s";
		document.getElementById("java4").style.transition = "all 0.5s";
		document.getElementById("java1").style.paddingTop = "25px";
		document.getElementById("java2").style.paddingTop = "25px";
		document.getElementById("java3").style.paddingTop = "25px";
		document.getElementById("java4").style.paddingTop = "25px";
		document.getElementById("js1").style.transition = "all 0.5s";
		document.getElementById("js2").style.transition = "all 0.5s";
		document.getElementById("js3").style.transition = "all 0.5s";
		document.getElementById("js4").style.transition = "all 0.5s";
		document.getElementById("js").style.fontSize = "20px";
		document.getElementById("navbar").style.height = "60px";
		document.getElementById("navbar").style.backgroundColor = "#283a59";
		document.getElementById("js1").style.color = "orange";
		document.getElementById("js2").style.color = "white";
		document.getElementById("js3").style.color = "white";
		document.getElementById("js4").style.color = "white";
	}
	if(body.scrollTop > 400) {
		document.getElementById("js2").style.color = "orange";
		document.getElementById("js1").style.color = "white";
		document.getElementById("js3").style.color = "white";
		document.getElementById("js4").style.color = "white";
	}
	if(body.scrollTop > 800) {
		document.getElementById("js3").style.color = "orange";
		document.getElementById("js1").style.color = "white";
		document.getElementById("js2").style.color = "white";
		document.getElementById("js4").style.color = "white";
	}
	if(body.scrollTop > 1700) {
		document.getElementById("js4").style.color = "orange";
		document.getElementById("js1").style.color = "white";
		document.getElementById("js2").style.color = "white";
		document.getElementById("js3").style.color = "white";
	}
	if(body.scrollTop < 50) {
		document.getElementById("left").style.marginRight = "650px";
		document.getElementById("left").style.paddingTop = "25px";
		document.getElementById("java1").style.paddingTop = "34px";
		document.getElementById("java2").style.paddingTop = "34px";
		document.getElementById("java3").style.paddingTop = "34px";
		document.getElementById("java4").style.paddingTop = "34px";
		document.getElementById("navbar").style.border = "1px inset #636363";
		document.getElementById("js").style.fontSize = "24px";
		document.getElementById("js").style.marginTop = "0";
		document.getElementById("navbar").style.height = "80px";
		document.getElementById("navbar").style.backgroundColor = "transparent";
		document.getElementById("js1").style.color = "white";
		document.getElementById("js2").style.color = "white";
		document.getElementById("js3").style.color = "white";
		document.getElementById("js4").style.color = "white";
	}
}
function homeFunction() {
	 var body = document.body;
	 body.scrollTop = 0;
}
function aboutFunction() {
	 var body = document.body;
	 body.scrollTop = 450;
}
function portFunction() {
	 var body = document.body;
	 body.scrollTop = 900;
}
function contactFunction() {
	 var body = document.body;
	 body.scrollTop = 1800;
}