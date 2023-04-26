// open/close form
let btn = document.querySelector('.hero__btn');
let formShow = document.querySelector('.hero__show');
let close = document.querySelector('.form__close');

btn.addEventListener('click',
    function () {
        formShow.classList.toggle('form--active');
        document.body.classList.toggle('stop-scroll');
    });

close.addEventListener('click',
    function () {
        formShow.classList.remove('form--active');
        document.body.classList.remove('stop-scroll');
    });

// select
let select = function() {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
    });

  function selectToggle() {
    this.parentElement.classList.toggle('is--active');
  };

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.form__select');
    let currentText = select.querySelector('.select__current');
    let iconNone = document.querySelector('.select__icon');
    let iconActive = document.querySelector('.select__icon-transparent');

    currentText.innerText = text;
    select.classList.remove('is--active');
    select.classList.toggle('select__header--active');
    iconNone.classList.add('select__icon--none');
    iconActive.classList.add('select__icon--active');
  };
};

select();

//validator
 let form = document.querySelector('.hero__form');
 let formInputs = document.querySelectorAll('.form__input');
 let inputEmail = document.querySelector('.input-email');
 let inputPhone = document.querySelector('.imput-phone');

 function validateEmail(email) {
  let rightEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rightEmail.test(String(email).toLowerCase());
 };

 function validatePhone(phone) {
  let rightPhone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
  return rightPhone.test(String(phone));
 };

 form.onsubmit = function() {
  let emailVal = inputEmail.value;
  let phoneVal = inputPhone.value;
  emtyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input) {
    if (input.value === '') {
      input.classList.add('error');
      input.classList.add('background--invalid');
    } else {
      input.classList.remove('error');
      input.classList.remove('background--invalid');
      input.classList.add('background--valid');
    }
  });

    if(emtyInputs.length !== 0) {
      return false;
    }

    if (!validatePhone(phoneVal)) {
      inputPhone.classList.add('error');
      input.classList.add('background--invalid');
      return false;
    } else {
      inputPhone.classList.remove('error');
      input.classList.remove('background--invalid');
      input.classList.add('background--valid');
    }

    if(!validateEmail(emailVal)) {
      inputEmail.classList.add('error');
      input.classList.add('background--invalid');
      return false;
    } else {
      inputEmail.classList.remove('error');
      input.classList.remove('background--invalid');
      input.classList.add('background--valid');
    }
 };

// slider
// import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // mousewheel: {
  //   sensitivity: 1,
  // },
  autoHeight: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});


