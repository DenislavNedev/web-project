const modal = document.getElementById("myModal");
const btn = document.getElementById("enroll_day0");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

const modal_title = document.getElementById("modal-title");
const header_title = document.getElementById("header-title").innerText;
const date = document.getElementById("date").innerText;

modal_title.innerText = date + " " + header_title;