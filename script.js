
// back to top button

let mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
            
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
} 

//dark-mode  button

function dark() {
    var menu = document.getElementById("darkMode");

    menu.classList.toggle("active");
    document.body.classList.toggle ("dark");
}

// back button
    function goBack() { 
        window.history.back(); 
    } 


// image slideshow
    let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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


