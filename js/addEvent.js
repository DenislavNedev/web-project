'use strict';

setTimeout(function() {

    const calendars = document.querySelectorAll(".calendar");
    
    calendars.forEach(calendar => {
        const calendarPlusButton = calendar.childNodes[1].childNodes[0].childNodes[1];
        const calendarName = calendar.childNodes[0].childNodes[0].innerText;
        const calendarDate = calendar.childNodes[1].childNodes[0].childNodes[0].innerText;

        const modal = document.getElementById("myModal");

        calendarPlusButton.addEventListener('click', (event) => {
            event.preventDefault();

            modal.style.display = "block";

            const span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }
            const modal_title = document.getElementById("modal-title");
            modal_title.innerText = calendarDate + " " + calendarName;

            // here add available slots in the dropdown

            const addEventButton = document.getElementById('add-event-btn');
            addEventButton.addEventListener('click', (event) => {
                let time = document.getElementById("select-time");
                let selected_time = time.options[time.selectedIndex].innerText;
                let start_time = selected_time.split("-")[0].trim();
                let end_time = selected_time.split("-")[1].trim();
                const subject = document.getElementById("subject").value;

                let start_timestamp = new Date(calendarDate.split("-")[0], parseInt(calendarDate.split("-")[1]) - 1, calendarDate.split("-")[2], start_time.split(":")[0], start_time.split(":")[1]);
                let end_timestamp = new Date(calendarDate.split("-")[0], parseInt(calendarDate.split("-")[1]) - 1, calendarDate.split("-")[2], end_time.split(":")[0], end_time.split(":")[1]);

                console.log(start_timestamp);
                console.log(end_timestamp);

                fetch('../endpoints/getProfile.php', { method: 'GET' })
                .then(response => response.json())
                .then(response => {
                    if (!response.status) {
                        console.log('Something went wrong!');
                    } else {
                        if (response.role === 'student') {
                            const username = response.username;
        
                            const event = {
                                username: username,
                                subject: subject,
                                start: start_timestamp,
                                end: end_timestamp
                            }
        
                            fetch('../endpoints/addEvent.php', {
                                method: 'POST',
                                body: JSON.stringify(event)
                            })
                            .then(response => response.json())
                            .then(response => {
                                // then check if status is ok

                                if(response.status) {
                                    window.location.reload();
                                }
                            })
                        }
                    }
                });
            });
        });
    });
}, 500);