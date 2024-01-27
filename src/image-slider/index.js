import './styles.css';
import Hills from './images/hills.jpg';
import Ocean from './images/ocean.jpg';
import Glacier from './images/glacier.jpg';

const frame = document.querySelector('.frame');
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

const moveSlidesContainer = (index) => {
  slidesContainer.setAttribute(
    'style',
    `transform: translate(-${index * 500}px);`,
  );
};
moveSlidesContainer(1);
