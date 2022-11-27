const buttonStatus = document.querySelector('button')
const close = document.querySelector('.close');
const popup = document.querySelector('.cards');

close.addEventListener('click', () => {
  console.log('x');

  buttonStatus.style.display = 'block';
  stopConfetti();

  popup.classList.toggle('cards');
  popup.classList.toggle('show');
});

buttonStatus.addEventListener('click', () => {
  console.log('clicked!');

  buttonStatus.style.display = 'none';

  popup.classList.toggle('cards');
  popup.classList.toggle('show');
})

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

const start = () => {
  setTimeout(function() {
    startConfetti();
  }, 1000);

  setTimeout(function() {
    stopConfetti();
  }, 3000);
}

function showSlides(n) {

  if(n==7){
    start()
  }

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
  dots[Math.ceil((slideIndex/7)*3 - 1)].className += " active";
}