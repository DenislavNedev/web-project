'use strict';

// console.log("pesho");

const add_event_btn = document.getElementById("add-event-btn");

add_event_btn.addEventListener("click", e => {
    let time = document.getElementById("select-time");
    let selected_time = time.options[time.selectedIndex].innerText;
    let start_time = selected_time.split("-")[0].trim();
    let end_time = selected_time.split("-")[1].trim();

    const subject = document.getElementById("subject").value;

    const date = document.getElementById("date").innerText;

    let start_timestamp = new Date(date.split("-")[2], parseInt(date.split("-")[1]) - 1, date.split("-")[0], start_time.split(":")[0], start_time.split(":")[1]);
    let end_timestamp = new Date(date.split("-")[2], parseInt(date.split("-")[1]) - 1, date.split("-")[0], end_time.split(":")[0], end_time.split(":")[1]);

    console.log(start_timestamp);
    console.log(end_timestamp);

    fetch('../endpoints/getProfile.php', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            if (!response.status) {
                console.log('Something went wrong!');
            } else {
                if (response.role === 'student') {
                    const faculty_number = response.facultyNumber;
                    const name = response.name;

                    const event = {
                        facultyNumber: faculty_number,
                        name: name,
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
                            console.log(response);
                            const date_start = new Date(response.time_start);
                            const date_end = new Date(response.time_end);

                            console.log(date_start);
                            console.log(date_end);
                        })
                }
            }
        });

    console.log(start_timestamp);
    console.log(end_timestamp);
});