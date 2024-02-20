const burgerBtn = document.querySelector('.nav__burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('lock')

})