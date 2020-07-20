'use strict';

setTimeout(function() {

    const buttons = document.querySelectorAll(".cl_add");

    console.log(buttons);
    
    buttons.forEach(btn => {
    
        btn.addEventListener("click", e => {
            
            //We need to do this for every calendar

            // let time = document.getElementById("select-time");
            // let selected_time = time.options[time.selectedIndex].innerText;
            // let start_time = selected_time.split("-")[0].trim();
            // let end_time = selected_time.split("-")[1].trim();
        
            // const subject = document.getElementById("subject").value;
        
            // const date = document.getElementById("date").innerText;
        
            // let start_timestamp = new Date(date.split("-")[0], parseInt(date.split("-")[1]) - 1, date.split("-")[2], start_time.split(":")[2], start_time.split(":")[1]);
            // let end_timestamp = new Date(date.split("-")[0], parseInt(date.split("-")[1]) - 1, date.split("-")[2], end_time.split(":")[2], end_time.split(":")[1]);
        
            // fetch('../endpoints/getProfile.php', { method: 'GET' })
            // .then(response => response.json())
            // .then(response => {
            //     if (!response.status) {
            //         console.log('Something went wrong!');
            //     } else {
            //         if (response.role === 'student') {
            //             const username = response.username;
    
            //             const event = {
            //                 username: username,
            //                 subject: subject,
            //                 start: start_timestamp,
            //                 end: end_timestamp
            //             }
    
            //             fetch('../endpoints/addEvent.php', {
            //                 method: 'POST',
            //                 body: JSON.stringify(event)
            //             })
            //             .then(response => response.json())
            //             .then(response => {
            //                 // then check if status is ok

            //                 if(response.status) {
            //                     window.location.reload();
            //                 }
            //             })
            //         }
            //     }
            // });
        });
    });
}, 500);