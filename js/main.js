// DOM item selection
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuStyling = document.querySelector('.menu-styling');
const menuItems = document.querySelectorAll('.menu-item');

// Initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuStyling.classList.add('show');
    menuItems.forEach(item => item.classList.add('show'));
    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuStyling.classList.remove('show');
    menuItems.forEach(item => item.classList.remove('show'));
    // Reset menu state
    showMenu = false;
  }
}
