const hambMenu = document.getElementById('hamb');
const menuResp = document.getElementById('menu-resp');
const iconOpen = document.getElementById('iconHamb');
const iconClose = document.getElementById('iconClose');

hambMenu.addEventListener('click', () => {
  menuResp.classList.toggle('opacity-0');
  menuResp.classList.toggle('translate-x-full');

  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});
