//SIDE BAR MENU
function openNav() {
	document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	//document.getElementById("main").onclick="openNav()" &#9776; MENU;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {

	document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

// GOOGLE MAPS

function initMap(){
	//Map options
	var options = {
		zoom:3,
		 center:{lat:-8.7830,lng:-55.4915}
	}
	//New map
	var map = new
	google.maps.Map(document.getElementById('map'),options);

	//MARKERS
	var marker = new google.maps.Marker({
	  position:{lat:13.7942,lng:-88.8965},
			map:map,
	  });
				//Markers clickable and linked to pages
	  		google.maps.event.addListener(marker, 'click', function () {
  window.location.href="el-salvador.html";
	  });
	  
	var marker = new google.maps.Marker({
	  position:{lat:23.6345,lng:-102.5528},
				map:map
	  });
	  google.maps.event.addListener(marker, 'click', function () {
  window.location.href="mexico.html";
	  });
	  
	var marker = new google.maps.Marker({
	  position:{lat:9.7489,lng:-83.7534},
				map:map
	  });
	  google.maps.event.addListener(marker, 'click', function () {
  window.location.href="costa-rica.html";
	  });
	  
	var marker = new google.maps.Marker({
	  position:{lat:9.1900,lng:-75.0152},
				map:map
	  }); 
	  google.maps.event.addListener(marker, 'click', function () {
  window.location.href="machu-pichu.html";
	  });
  

}

//MOBILE SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Changes image every 2 seconds
}

//TABLET SLIDESHOW
function expandGallery(imgs) {
    var expandImg = document.getElementById("expandedImage");
    var imgText = document.getElementById("imageText");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}


//DESKTOP SLIDESHOW
var slideIndex = 1;
displaySlides(slideIndex);

function plusSlides(n) {
  displaySlides(slideIndex += n);
}

function currentSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("desktop-slides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}