'use strict'

const hambMenu= document.getElementById('hamb');
const menuResp= document.getElementById('menu-resp');

hambMenu.addEventListener('click', function(){

 menuResp.classList.toggle('opacity-0');
  menuResp.classList.toggle('translate-x-full');

});
