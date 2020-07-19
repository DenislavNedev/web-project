'use strict';

const addSlotBtn = document.getElementById("add-slot-button");
addSlotBtn.addEventListener('click', (event) => {
	event.preventDefault();
    //ТODO check for empty values
    //TODO add min date of slot
    //TODO add end hour not before start hour

    const slot = {
		name: document.getElementById('add-slot-name').value,
        date: document.getElementById('add-slot-date').value,
        start_hour: document.getElementById('add-slot-time-start').value,
		end_hour: document.getElementById('add-slot-time-end').value,
		period: document.getElementById('add-slot-time-period').value
	}
    console.log(slot);
    passSlotData(slot);
});


const passSlotData = (slotData) => {
    fetch('../endpoints/addSlot.php', {
        method: 'POST',
        body: JSON.stringify(slotData)
    })
    .then(response => response.json())
    .then(response => {
        if (response.status) {
            console.log("Succesfull added new slot!");
        } else {
            showErrorMessage(response.message);
        }
    });
}

const showErrorMessage = (message) => {
	document.getElementById('add-slot-failure').classList.remove('hidden');
    document.getElementById('add-slot-failure-text').innerText = message;
    // shake animation here again
    const panel = document.getElementById('add-slots-form');
    panel.style.animation = 'shake 0.3s';
    panel.style.animationIterationCount = '1s';
}