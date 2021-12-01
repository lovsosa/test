var hamburger = document.querySelector('button.hamburger');
var nav = document.querySelector('.nav');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active')
  nav.classList.toggle('active')

})