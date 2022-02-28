'use strict';

const btnContainer = document.querySelector('.btn__container');
const btn = document.querySelectorAll('.btn');
const textContent = document.querySelectorAll('.text__container');

btnContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //   remove active btn
  btn.forEach(b => b.classList.remove('operation__tab--active'));

  //   activate btn
  clicked.classList.add('operation__tab--active');

  //   remove active text
  textContent.forEach(c => c.classList.remove('text__content--active'));

  //   activate text content

  document
    .querySelector(`.text__content--${clicked.dataset.point}`)
    .classList.add('text__content--active');
});
