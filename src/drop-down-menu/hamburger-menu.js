import Hamburger from './hamburger.png';

const hamburgerMenuContainer = document.querySelector('.hamburger-menu');

(function createHamburgerImg() {
  const img = document.createElement('img');
  img.src = Hamburger;
  hamburgerMenuContainer.appendChild(img);
})();
