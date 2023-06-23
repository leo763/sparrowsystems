// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
  myFunction1();
};

// Get the navbar
var toTop = document.getElementById("to-top");
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");

  }

  if(window.pageYOffset > 150){
    toTop.style.opacity = "1";
    toTop.style.transition = "0.5s";
  }
  else{
    toTop.style.opacity = "0";
    toTop.style.transition = "0.5s";
  }


 

}


var menuOn = document.getElementById("menu-on");
var menuOff = document.getElementById("menu-off");

menuOn.addEventListener("click",function(){
      document.getElementById("navlink").style.top = "100%";
      document.getElementById("navlink").style.transition = "0.5s";
      menuOff.style.display = "block";
      menuOn.style.display = "none";
});

menuOff.addEventListener("click",function(){
    document.getElementById("navlink").style.top = "-500%";
    document.getElementById("navlink").style.transition = "0.5s";
    menuOn.style.display = "block";
    menuOff.style.display = "none";
});



// Add the top class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction1() {
  if (window.pageYOffset >= sticky) {
  } else {
  }



}