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

const createImage = (imgObj) => {
  const img = document.createElement('img');
  img.src = imgObj.src;
  img.setAttribute('data-id', imgObj.id);
  slidesContainer.appendChild(img);
};
imgs.forEach(createImage);

let activeImg = imgs[0];
const showActiveImg = () => {
  const imgIndex = imgs.indexOf(activeImg);
  slidesContainer.setAttribute(
    'style',
    `transform: translate(-${imgIndex * 500}px);`,
  );
};
showActiveImg();

const dotsContainer = gallery.querySelector('.dots-container');
const createDot = (imgObj) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.setAttribute('data-id', imgObj.id);
  dotsContainer.appendChild(dot);
};
imgs.forEach(createDot);

const dots = dotsContainer.querySelectorAll('.dot');
let activeDot = dots[0];

const fillActiveDot = () => {
  dots.forEach((dot) => {
    dot.classList.remove('filled');
  });
  activeDot.classList.add('filled');
};
fillActiveDot();

const setActiveDot = (id) => {
  const activeDotNode = dotsContainer.querySelector(`[data-id=${id}`);
  activeDot = activeDotNode;
  fillActiveDot();
};

const handleDotClick = (e) => {
  const id = e.target.getAttribute('data-id');
  const clickedImgIndex = imgs.map((obj) => obj.id).indexOf(id);
  activeImg = imgs[clickedImgIndex];
  showActiveImg();
  setActiveDot(id);
};
dots.forEach((dot) => {
  dot.addEventListener('click', handleDotClick);
});

const nextArrow = gallery.querySelector('.next');
const handleNextClick = () => {
  const currentImgIndex = imgs.indexOf(activeImg);
  let nextImgIndex = currentImgIndex + 1;
  if (imgs.length === nextImgIndex) nextImgIndex = 0;
  activeImg = imgs[nextImgIndex];
  showActiveImg();
  setActiveDot(activeImg.id);
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
  setActiveDot(activeImg.id);
};
backArrow.addEventListener('click', handleBackClick);
