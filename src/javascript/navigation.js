const nav = document.querySelector('.nav__list')
const menu = document.querySelector('.nav__menu')
const menuControl = document.querySelector('.nav__control')

function toggleMenu() {
	nav.classList.toggle('active')
	menuControl.classList.toggle('animate')
}

menu.addEventListener('click', toggleMenu)
