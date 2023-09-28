const ham = document.querySelector('.open');
const close = document.querySelector('.close');
const menu = document.querySelector('.mobile__menu');


ham.addEventListener('click', () => {
  menu.style.display = 'flex';
  ham.style.display = 'none';
  close.style.display = 'block';
})

close.addEventListener('click',() => {
  menu.style.display = 'none';
  ham.style.display = 'block';
  close.style.display = 'none';
})