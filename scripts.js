

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


// //RESPONSIVE NAVBAR

// function myNav() {
//   var x = document.getElementById("nav");
//     if (x.className === "navBar") {
//       x.className += "responsive";
//     } 
//     else  if (x.className === "navBar sticky") {
//       navBar.classList.add("navBarresponsive")
//       navBar.classList.remove("navBar");
//     }
//     else {x.className = "navBar";}
//   }


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