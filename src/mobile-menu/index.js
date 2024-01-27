import './styles.css';

const container = document.querySelector('.container');

const addButtonView = container.querySelector('.add-button-view');
const menuView = container.querySelector('.menu-view');
const toggleViews = () => {
  addButtonView.classList.toggle('hidden');
  menuView.classList.toggle('hidden');
};
addButtonView.addEventListener('click', toggleViews);

const menuBtns = menuView.querySelector('button');
menuBtns.addEventListener('click', toggleViews);
