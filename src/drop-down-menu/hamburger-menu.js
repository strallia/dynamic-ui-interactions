import Hamburger from './hamburger.png';

const hamburgerMenuContainer = document.querySelector('.hamburger-menu');

(function createHamburgerImg() {
  const img = document.createElement('img');
  img.src = Hamburger;
  hamburgerMenuContainer.appendChild(img);
})();

const menuIcon = hamburgerMenuContainer.querySelector('.hamburger-menu > img');

const hideHamburgerMenuIcon = () => {
  if (document.body.clientWidth < 850) {
    menuIcon.classList.remove('hidden');
  }
  if (document.body.clientWidth > 850) {
    menuIcon.classList.add('hidden');
  }
};

if (document.body.clientWidth > 850) hideHamburgerMenuIcon();

window.addEventListener('resize', hideHamburgerMenuIcon);

const showMenuDropdown = () => {
  const dropDown = hamburgerMenuContainer.querySelector('.drop-down');
  dropDown.classList.toggle('visible');
};

menuIcon.addEventListener('click', showMenuDropdown);
