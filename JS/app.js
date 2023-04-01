
const menuBar = document.getElementById('menu-bar');
const menuClose = document.getElementById('menu-close');

menuBar.addEventListener('click',()=>{
    menuClose.style.display='block'; 
    menuBar.style.display='none'; 
});

menuClose.addEventListener('click',()=>{
    menuBar.style.display='block'; 
    menuClose.style.display='none'; 
});