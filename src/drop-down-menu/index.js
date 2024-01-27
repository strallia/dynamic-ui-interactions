import './styles.css';
import './hamburger-menu';

const nav = document.querySelector('nav');

const hideNavTabs = (e) => {
  const navTabs = nav.querySelector('nav > ul');
  if (document.body.clientWidth < 850) {
    navTabs.classList.add('hidden');
  }
  if (document.body.clientWidth > 850) {
    navTabs.classList.remove('hidden');
  }
};

if (document.body.clientWidth < 850) hideNavTabs();

window.addEventListener('resize', hideNavTabs);

const resetNavBackground = () => {
  const titleLinks = nav.querySelectorAll('nav > ul a');
  titleLinks.forEach((link) => {
    link.classList.remove('color-title');
  });

  const dropDowns = nav.querySelectorAll('.drop-down');
  dropDowns.forEach((dropDown) => {
    dropDown.classList.remove('color-column');
  });
};

const colorTitleLinkOnTitleHover = (linkNode) => {
  linkNode.classList.add('color-title');
};

const colorDropDownOnTitleHover = (linkNode) => {
  const titleValue = linkNode.parentNode.getAttribute('data-title');
  const coloredDropDown = nav.querySelector(
    `.drop-down[data-title="${titleValue}"]`,
  );
  coloredDropDown.classList.add('color-column');
};

const navTitleLinks = nav.querySelectorAll('nav > ul a');
navTitleLinks.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    resetNavBackground();
    colorTitleLinkOnTitleHover(e.target);
    colorDropDownOnTitleHover(e.target);
  });
});

const colorTitleOnDropDownHover = (dropDownNode) => {
  const titleValue = dropDownNode.getAttribute('data-title');
  const titleNode = nav.querySelector(
    `nav > ul li[data-title="${titleValue}"] a`,
  );
  titleNode.classList.add('color-title');
};

const colorDropDownOnDropDownHover = (dropDownNode) => {
  dropDownNode.classList.add('color-column');
};

const dropDownListItems = nav.querySelectorAll('.drop-down li');
dropDownListItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    resetNavBackground();
    colorTitleOnDropDownHover(e.target.parentNode.parentNode);
    colorDropDownOnDropDownHover(e.target.parentNode.parentNode);
  });
});

nav.addEventListener('mouseout', resetNavBackground);
