'use strict';

const isUsernameCorrect = (username) => {
    if (username.length < 3 || username.length > 10) {
        return false;
    }
    return true;
}

const showErrorMessage = (message) => {
	document.getElementById('login-failure').classList.remove('hidden');
    document.getElementById('login-failure-text').innerText = message;
}

const passLoginData = (userData) => {
    fetch('../endpoints/login.php', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(response => {
        if (response.status) {
            console.log("Successful login!");
            console.log(response.username);
        } else {
            console.log("Error login");
        }
    });
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', (event) => {
	event.preventDefault();

	const user = {
		username: document.getElementById('login-username').value,
		password: document.getElementById('login-password').value,
	}

	if (isUsernameCorrect(user.username)) {
		passLoginData(user);
	} else {
		showErrorMessage('Username should be between 3 and 10 symbols long!');
	}
});