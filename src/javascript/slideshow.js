let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const buttons = document.querySelectorAll('.control__button')

const init = (n) => {
	slides.forEach((slide) => {
		slide.style.display = 'none'
		slides[n].style.display = 'flex'
	})

	buttons.forEach((button) => {
		button.classList.remove('active')
		buttons[n].classList.add('active')
	})
}

document.addEventListener('DOMContentLoaded', init(currentSlide))

const next = () => {
	if (currentSlide >= slides.length - 1) {
		currentSlide = 0
	} else {
		currentSlide += 1
	}
	init(currentSlide)
}

buttons.forEach((button, i) => {
	button.addEventListener('click', () => {
		currentSlide = i
		init(i)
	})
})

setInterval(() => next(), 5000)
