// let slideIndex = 1;
showSlide(slideIndex);

function nextSubSlide() {
  subSlideIndex += 1;
  showSubSlide(subSlideIndex); // MAKE THIS FUNCTION
}

function nextSubSlideDelay(n) {
  subSlideIndex += 1;
  setTimeout(showSubSlide(subSlideIndex), n * 1000);
}

function nextSlide() {
  slideIndex += 1;
  showSlide(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  subSlideIndex = slideCounts[n];
  showSlide(slideIndex = n);
}

function showSlide(n) {
  if (n != 1) {fadeBackground()}
  if (n == 1) {document.body.style.backgroundImage = '';}
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // dots[slideIndex-1].className -= " active";
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // hide subslides
  let subslides = document.getElementsByClassName("mySubSlides");
  for (i = 0; i < subslides.length; i++) {
    subslides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSubSlide(n) {
  // document.body.style.backgroundImage = '';
  let i;
  let slides = document.getElementsByClassName("mySubSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // hide subslides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // hide slides
  let trueslides = document.getElementsByClassName("mySlides");
  for (i = 0; i < trueslides.length; i++) {
    trueslides[i].style.display = "none";
  }
  slides[subSlideIndex-1].style.display = "block";
}