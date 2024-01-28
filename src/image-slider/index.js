import './styles.css';
import Hills from './images/hills.jpg';
import Ocean from './images/ocean.jpg';
import Glacier from './images/glacier.jpg';

const gallery = document.querySelector('.gallery');
const frame = gallery.querySelector('.frame');
const slidesContainer = frame.querySelector('.slides');

const imgs = [
  {
    id: 'hills',
    src: Hills,
  },
  {
    id: 'ocean',
    src: Ocean,
  },
  {
    id: 'glacier',
    src: Glacier,
  },
];

let activeImg = imgs[0];

const createImage = (imgObj) => {
  const img = document.createElement('img');
  img.src = imgObj.src;
  img.setAttribute('data-id', imgObj.id);
  slidesContainer.appendChild(img);
};
imgs.forEach(createImage);

const showActiveImg = () => {
  const imgIndex = imgs.indexOf(activeImg);
  slidesContainer.setAttribute(
    'style',
    `transform: translate(-${imgIndex * 500}px);`,
  );
};
showActiveImg();

const nextArrow = gallery.querySelector('.next');
const handleNextClick = () => {
  const currentImgIndex = imgs.indexOf(activeImg);
  let nextImgIndex = currentImgIndex + 1;
  if (imgs.length === nextImgIndex) nextImgIndex = 0;
  activeImg = imgs[nextImgIndex];
  showActiveImg();
};
nextArrow.addEventListener('click', handleNextClick);

const backArrow = gallery.querySelector('.back');
const handleBackClick = () => {
  const currentImgIndex = imgs.indexOf(activeImg);
  let prevImgIndex = currentImgIndex - 1;
  if (currentImgIndex === 0) {
    prevImgIndex = imgs.length - 1;
  }
  activeImg = imgs[prevImgIndex];
  showActiveImg();
};
backArrow.addEventListener('click', handleBackClick);
