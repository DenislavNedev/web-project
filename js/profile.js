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