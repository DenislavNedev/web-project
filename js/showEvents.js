'use strict';

setTimeout(function() {
    const calendars = document.querySelectorAll(".calendar");
    
    // console.log(calendars);
    // console.log(calendars.length);

    calendars.forEach(calendar => {
        fetch('../endpoints/getEvents.php', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            response.events.forEach(event => {

                const date = calendar.childNodes[1].childNodes[0].childNodes[0].innerText;
                if (event.start.split(" ")[0] == date) {
                    const event_item = document.createElement("div");
                    event_item.setAttribute("class", "event_item");
                    const event_dot = document.createElement("div");
                    event_dot.setAttribute("class", "ei_Dot");
                    const event_title = document.createElement("p");
                    event_title.setAttribute("class", "ei_Title");
                    const time = document.createElement("time");
                    time.setAttribute("class", "ei_Copy");

                    event_title.innerText = event.subject + ", " + event.name;
                    time.innerText = (new Date(event.start).getHours() < 10 ? '0' : '') + new Date(event.start).getHours() + ":" + (new Date(event.start).getMinutes() < 10 ? '0' : '') + new Date(event.start).getMinutes() + " - " + (new Date(event.end).getHours() < 10 ? '0' : '') + new Date(event.end).getHours() + ":" + (new Date(event.end).getMinutes() < 10 ? '0' : '') + new Date(event.end).getMinutes();
                    const calendar_events = calendar.childNodes[2];

                    event_item.appendChild(event_dot);
                    event_item.appendChild(event_title);
                    event_item.appendChild(time);
                    calendar_events.appendChild(event_item);

                    event_item.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        const queryString = '?date=' + calendar.childNodes[1].childNodes[0].childNodes[0].innerText + '&end=' + new Date(event.end).getHours() + ":" + (new Date(event.end).getMinutes() < 10 ? '0' : '') + new Date(event.end).getMinutes() + '&subject=' + event.subject + '&presenter=' + event.name;
                        window.location.href = "../views/timer.html" + queryString;
                    });
                }
            });

        });
    });
    }
, 500);