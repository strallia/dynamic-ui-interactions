import './styles.css';
import Camera from './icons/camera.png';
import PaperClip from './icons/paper-clip.png';
import Chat from './icons/chat.png';
import Clock from './icons/clock.png';

const container = document.querySelector('.container');

const addButtonView = container.querySelector('.add-button-view');
const menuView = container.querySelector('.menu-view');
const toggleViews = () => {
  addButtonView.classList.toggle('hidden');
  menuView.classList.toggle('hidden');
};
addButtonView.addEventListener('click', toggleViews);

const menuItems = [
  {
    title: 'Camera',
    img: Camera,
  },
  {
    title: 'Attachment',
    img: PaperClip,
  },
  {
    title: 'Work Chat',
    img: Chat,
  },
  {
    title: 'Reminder',
    img: Clock,
  },
];

const appendChildren = (parentNode, childrenArr) => {
  childrenArr.forEach((child) => {
    parentNode.appendChild(child);
  });
};

const createTabNode = (item) => {
  const tabDiv = document.createElement('div');
  const titlePara = document.createElement('p');
  const btn = document.createElement('button');
  const icon = document.createElement('img');

  tabDiv.classList.add('tab');
  btn.classList.add('small');
  titlePara.setAttribute('data-id', item.title.toLowerCase());
  btn.setAttribute('data-id', item.title.toLowerCase());
  icon.setAttribute('src', item.img);

  titlePara.textContent = item.title;

  btn.addEventListener('click', toggleViews);

  btn.appendChild(icon);
  appendChildren(tabDiv, [titlePara, btn]);
  menuView.appendChild(tabDiv);
};

menuItems.forEach(createTabNode);
