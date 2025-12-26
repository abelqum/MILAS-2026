'use strict'

const hambMenu= document.getElementById('hamb');
const menuResp= document.getElementById('menu-resp');

hambMenu.addEventListener('click', function(){

menuResp.classList.toggle('hidden');

});
