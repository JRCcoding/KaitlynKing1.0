

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

//MENU MODAL
function modalButton() {
  $(document).ready(function() {
    $("#myModal").modal();
  })  
}

//CAROUSEL MODAL
function modalButton2() {
  $(document).ready(function() {
    $("#myModal2").modal();
  })
}