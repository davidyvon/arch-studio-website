document.addEventListener('DOMContentLoaded', () => {
	const usernameEl = document.getElementById('username')
	const emailEl = document.getElementById('email')
	const textareaEl = document.getElementById('textarea')
	const form = document.getElementById('signup')

	const isRequired = (value) => value !== ''

	const isEmailValid = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	const showError = (input, message) => {
		// get the form-field element
		const formField = input.parentElement
		const errorStyling = input
		const errorMessage = formField.querySelector('small')

		formField.classList.add('error')
		errorStyling.classList.add('error')
		errorMessage.textContent = message
	}

	const showSuccess = (input) => {
		// get the form-field element
		const formField = input.parentElement
		const errorStyling = input
		const errorMessage = formField.querySelector('small')

		formField.classList.remove('error')
		errorStyling.classList.remove('error')
		errorMessage.textContent = ''
	}

	const checkUsername = () => {
		let valid = false
		const username = usernameEl.value.trim()

		if (!isRequired(username)) {
			showError(usernameEl, `Can't be empty`)
		} else {
			showSuccess(usernameEl)
			valid = true
		}
		return valid
	}

	const checkEmail = () => {
		let valid = false
		const email = emailEl.value.trim()

		if (!isRequired(email)) {
			showError(emailEl, `Can't be empty`)
		} else if (!isEmailValid(email)) {
			showError(emailEl, `Please use a valid email address`)
		} else {
			showSuccess(emailEl)
			valid = true
		}
		return valid
	}

	const checkTextarea = () => {
		let valid = false
		const textarea = textareaEl.value.trim()

		if (!isRequired(textarea)) {
			showError(textareaEl, `Can't be empty`)
		} else {
			showSuccess(textareaEl)
			valid = true
		}
		return valid
	}

	function submitForm(e) {
		e.preventDefault()
		// validate fields
		const isUsernameValid = checkUsername()
		const isUserEmailValid = checkEmail()
		const isTexteareaValid = checkTextarea()

		const isFormValid = isUsernameValid && isUserEmailValid && isTexteareaValid

		if (isFormValid) {
			// submit to the server if the form is valid
		}
	}

	if (form) {
		form.addEventListener('submit', submitForm)
	}

	const debounce = (fn, delay = 500) => {
		let timeoutId
		return (...args) => {
			// cancel the previous timer
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
			// setup a new timer
			timeoutId = setTimeout(() => {
				// eslint-disable-next-line prefer-spread
				fn.apply(null, args)
			}, delay)
		}
	}

	if (form) {
		form.addEventListener(
			'input',
			debounce((e) => {
				switch (e.target.id) {
					case 'username':
						checkUsername()
						break
					case 'email':
						checkEmail()
						break
					case 'textarea':
						checkTextarea()
						break
					default:
				}
			})
		)
	}
})
