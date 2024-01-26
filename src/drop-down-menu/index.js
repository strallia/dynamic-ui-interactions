import './styles.css';

const colorTitle = function colorTitleBackground(titleNode) {
  const titles = document.querySelectorAll('nav > ul li');
  titles.forEach((title) => {
    title.classList.remove('color-title');
  });

  titleNode.classList.add('color-title');
};

const colorDropDown = function colorTitleDropDown(title) {
  const dropDowns = document.querySelectorAll('.drop-down');
  dropDowns.forEach((dropDown) => {
    dropDown.classList.remove('color-column');
  });

  const titleValue = title.getAttribute('data-value');
  const coloredDropDown = document.querySelector(`.drop-down.${titleValue}`);
  coloredDropDown.classList.add('color-column');
};

const navTitles = document.querySelectorAll('nav > ul li');
navTitles.forEach((title) => {
  title.addEventListener('mouseover', (e) => {
    colorTitle(e.target);
    colorDropDown(e.target);
  });
});
