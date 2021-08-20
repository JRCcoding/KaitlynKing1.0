

//STICKY NAVBAR

var navBar = document.getElementById("nav");
var sticky = navBar.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
} else {
    navBar.classList.remove("sticky");
    }
}


//RESPONSIVE NAVBAR

function myNav() {
  var x = document.getElementById("nav");
    if (x.className === "navBar") {
      x.className += "responsive";
    } 
    else  if (x.className === "navBar sticky") {
      navBar.classList.add("navBarresponsive")
      navBar.classList.remove("navBar");
    }
    else {x.className = "navBar";}
  }


// SLIDESHOW

// var slideIndex = 1;
// showSlides(slideIndex);

// // next/prev controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }


// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slide.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }