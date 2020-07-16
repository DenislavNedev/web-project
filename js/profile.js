'use strict';

const insertAfter = (referenceNode, newNode) => {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.onload = (event) => {
	event.preventDefault();

	fetch('../endpoints/getProfile.php', { method: 'GET' })
		.then(response => response.json())
		.then(response => {
			if (!response.status) {
				console.log('Something went wrong!');
			} else {
				document.getElementById('welcome-prompt').innerText += (' ' + response.name);
				document.getElementById('username').innerText += (' ' + response.username);
				document.getElementById('email').innerText += (' ' + response.email);
				document.getElementById('role').innerText += (' ' + response.role);
				if (response.role === 'student') {
					const profile = document.getElementById('profile');
					const facultyNumberNode = document.createElement('p');
					facultyNumberNode.setAttribute('id', 'facultyNumber');
					const facultyNumberText = document.createTextNode('Faculty Number: ' + response.facultyNumber);
					facultyNumberNode.appendChild(facultyNumberText);
					insertAfter(document.getElementById('role'), facultyNumberNode);
				}
			}
		});
};

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', (event) => {
	event.preventDefault();

	fetch('../endpoints/logout.php', { method: 'GET' })
		.then(response => response.json())
		.then(response => {
			if (response.status) {
				window.location.replace('../views/login.html');
			} else {
				console.log('Logout failed!');
			}
		});
});

const showErrorMessage = (message) => {
	document.getElementById('change-failure').classList.remove('hidden');
	document.getElementById('failure-message').innerText = message;
	// shake animation here again
	const panel = document.getElementById('profile');
	panel.style.animation = 'shake 0.3s';
	panel.style.animationIterationCount = '1s';
}

const showSnackbar = (message) => {
	const snackbar = document.getElementById('snackbar');
	snackbar.innerText = message;
	snackbar.className = 'show';
	setTimeout(function () {
		snackbar.className = snackbar.className.replace('show', '');
	}, 3000);
}

const changeUsernameButton = document.getElementById('change-username-button');
changeUsernameButton.addEventListener('click', (event) => {
	event.preventDefault();

	changeUsernameButton.classList.add('hidden');
	const usernameForm = document.getElementById('username-form');
	usernameForm.classList.remove('hidden');
	const saveNewUsernameButton = usernameForm.childNodes[3];
	saveNewUsernameButton.addEventListener('click', (event) => {
		console.log('clicked username');
	});
})

const changeEmailButton = document.getElementById('change-email-button');
changeEmailButton.addEventListener('click', (event) => {
	event.preventDefault();

	changeEmailButton.classList.add('hidden');
	const emailForm = document.getElementById('email-form');
	emailForm.classList.remove('hidden');
	const saveNewEmailButton = emailForm.childNodes[3];
	saveNewEmailButton.addEventListener('click', (event) => {
		console.log('clicked email');
	});
});

const changePasswordRequest = (userPasswords) => {
	fetch('../endpoints/changePassword.php', {
		method: 'POST',
		body: JSON.stringify(userPasswords)
	})
		.then(response => response.json())
		.then(response => {
			if (response.status) {
				showSnackbar('You have successfully changed your password');
			}
		});
}

const changePasswordListen = () => {
	const changePasswordButton = document.getElementById('change-password-button');
	changePasswordButton.addEventListener('click', (event) => {
		event.preventDefault();

		changePasswordButton.innerText = "Save";
		const passwordsForm = document.getElementById('passwords');
		passwordsForm.classList.remove('hidden');
		changePasswordButton.addEventListener('click', (event) => {
			event.preventDefault();
			const userPasswords = {
				current: document.getElementById('current-password').value,
				new: document.getElementById('new-password').value
			}

			const confirmationPassword = document.getElementById('confirm-new-password').value;

			if (userPasswords.new != confirmationPassword) {
				showErrorMessage('Passwords don\'t match');
			} else {
				changePasswordRequest(userPasswords);
			}
		});
	});
}

changePasswordListen();
