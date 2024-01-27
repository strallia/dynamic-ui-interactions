import './styles.css';
import Hills from './images/hills.jpg';

const frame = document.querySelector('.frame');
const slidesContainer = frame.querySelector('.slides');

const imgs = slidesContainer.querySelectorAll('img');

imgs.forEach((img) => {
  img.setAttribute('src', Hills);
});
