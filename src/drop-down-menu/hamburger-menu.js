import Hamburger from './hamburger.png';

const hamburgerMenuContainer = document.querySelector('.hamburger-menu');

(function createHamburgerImg() {
  const img = document.createElement('img');
  img.src = Hamburger;
  hamburgerMenuContainer.appendChild(img);
})();

const menuIcon = hamburgerMenuContainer.querySelector('.hamburger-menu > img');
const dropDown = hamburgerMenuContainer.querySelector('.drop-down');

const hideHamburgerMenu = () => {
  if (document.body.clientWidth < 850) {
    menuIcon.classList.remove('hidden');
    dropDown.classList.remove('hidden');
  }
  if (document.body.clientWidth > 850) {
    menuIcon.classList.add('hidden');
    dropDown.classList.add('hidden');
    dropDown.classList.remove('visible');
  }
};

if (document.body.clientWidth > 850) hideHamburgerMenu();

window.addEventListener('resize', hideHamburgerMenu);

const showMenuDropdown = () => {
  dropDown.classList.toggle('visible');
};

menuIcon.addEventListener('click', showMenuDropdown);
