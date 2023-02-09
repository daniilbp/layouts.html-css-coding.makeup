const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 0,
  loop: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },
  autoplay: {
    delay: 5000,
  }
});


let tabsBtn = document.querySelectorAll('.process__top__link');
let tabsItem = document.querySelectorAll('.process__bottom');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('process__top__link--active')});
    e.currentTarget.classList.add('process__top__link--active');

    tabsItem.forEach(function(element){ element.classList.remove('process__bottom--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('process__bottom--active');
  });
});


new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll')
  })
})


let search = document.querySelector('.header__search');
let searchBlock = document.querySelector('.search-block');
let closeSearch = document.querySelector('.search-icon');

search.addEventListener('click', function() {
  searchBlock.classList.toggle('search-block--active');
})

closeSearch.addEventListener('click', function() {
  searchBlock.classList.remove('search-block--active')
})

search.addEventListener('click', function() {
  search.classList.toggle('translate');
})
