import './styles.css';

const nav = document.querySelector('nav');

const colorTitleOnTitleHover = (titleNode) => {
  const titles = nav.querySelectorAll('nav > ul li');
  titles.forEach((title) => {
    title.classList.remove('color-title');
  });

  titleNode.classList.add('color-title');
};

const colorDropDownOnTitleHover = (titleNode) => {
  const dropDowns = nav.querySelectorAll('.drop-down');
  dropDowns.forEach((dropDown) => {
    dropDown.classList.remove('color-column');
  });

  const titleValue = titleNode.getAttribute('data-title');
  const coloredDropDown = nav.querySelector(
    `.drop-down[data-title="${titleValue}"]`,
  );
  coloredDropDown.classList.add('color-column');
};

const navTitles = nav.querySelectorAll('nav > ul li');
navTitles.forEach((title) => {
  title.addEventListener('mouseover', (e) => {
    colorTitleOnTitleHover(e.target);
    colorDropDownOnTitleHover(e.target);
  });
});

const colorTitleOnDropDownHover = (dropDownNode) => {
  const titles = nav.querySelectorAll('nav > ul li');
  titles.forEach((title) => {
    title.classList.remove('color-title');
  });

  const titleValue = dropDownNode.getAttribute('data-title');
  const titleNode = nav.querySelector(
    `nav > ul li[data-title="${titleValue}"]`,
  );
  titleNode.classList.add('color-title');
};

const colorDropDownOnDropDownHover = (dropDownNode) => {
  const dropDowns = nav.querySelectorAll('.drop-down');
  dropDowns.forEach((dropDown) => {
    dropDown.classList.remove('color-column');
  });

  dropDownNode.classList.add('color-column');
};

const dropDownListItems = nav.querySelectorAll('.drop-down li');
dropDownListItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    colorTitleOnDropDownHover(e.target.parentNode);
    colorDropDownOnDropDownHover(e.target.parentNode);
  });
});
