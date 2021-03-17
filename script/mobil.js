// MENU 

const menuButton = document.querySelector('.menuBtn');
const menu = document.querySelector('header');

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})
