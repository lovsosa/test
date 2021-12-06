var hamburger = document.querySelector('button.hamburger');
var nav = document.querySelector('.nav');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active')
  nav.classList.toggle('active')

})

let tagLinks = document.querySelectorAll('.tags__link');
let infos = document.querySelectorAll('.news__info');
let tagWrap = document.querySelector('.side__tags');


tagLinks.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    for (const item of tagWrap.children) {
      item.classList.remove('active')
    }

    if (!this.classList.contains('active')) {
      let [,hash] = this.getAttribute('href').split('#');
      infos.forEach(info => {
        
        info.classList.remove('active')
        if ( hash === info.dataset.desc ) {
          this.classList.add('active');
          info.classList.add('active')
        }
      })
    }
  })
})