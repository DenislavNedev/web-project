'use strict';
window.onload = (event) => {
    event.preventDefault();

    fetch('../endpoints/getEvents.php', { method: 'GET' })
        .then(response => response.json())
        .then(response => {
            // console.log(response);

            response.events.forEach(event => {
                const event_item = document.createElement("div");
                event_item.setAttribute("class", "event_item");
                const event_dot = document.createElement("div");
                event_dot.setAttribute("class", "ei_Dot");
                const event_title = document.createElement("p");
                event_title.setAttribute("class", "ei_Title");
                const time = document.createElement("time");
                time.setAttribute("class", "ei_Copy");

                event_title.innerText = event.subject + ", " + event.name;
                time.innerText = new Date(event.start).getHours() + ":" + (new Date(event.start).getMinutes() < 10 ? '0' : '') + new Date(event.start).getMinutes() + " - " + new Date(event.end).getHours() + ":" + (new Date(event.end).getMinutes() < 10 ? '0' : '') + new Date(event.end).getMinutes();

                console.log(new Date(event.start));

                const calendar_events = document.getElementById("calendar-events");

                event_item.appendChild(event_dot);
                event_item.appendChild(event_title);
                event_item.appendChild(time);
                calendar_events.appendChild(event_item);
            });

        });
};

