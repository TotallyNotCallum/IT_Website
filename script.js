function Lucky() {
    var number = Math.floor(Math.random() * 5)
    console.log(number)
    if (number == 0){
        window.location.href = "https://callum.contact/aboutme.html"
    }
    if (number == 1 ){
        window.location.href = "news.html"
    }
    if (number == 2){
        window.location.href = "blogs.html"
    }
    if (number == 3){
        window.location.href = "topics.html"
    }
    if (number == 4){
      Colour()
    }
}

function Colour(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
  

window.onload = (event) => {
    let slideIndex = 1;
    showSlides(slideIndex); 
}

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