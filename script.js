/*slideshow begain*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2700); // Change image every 2 seconds
}
/*slideshow end*/

/*signup popup begain*/

function signup(){
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("subtn");
	
	
	modal.style.display = "block";
	
}

function signin(){
	var modal = document.getElementById('myModal2');
	var btn = document.getElementById("subtn");
	
	
	modal.style.display = "block";
	
}

function span(){
	var modal = document.getElementById('myModal');
	var modal2 = document.getElementById('myModal2');
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "none";
	modal2.style.display = "none";
}



/*signup popup end*/