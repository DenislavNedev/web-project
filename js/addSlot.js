"use strict";

const addSlotBtn = document.getElementById("add-slot-button");
const EMPTY_FIELD = "";

function areThereEmptyFields() {
  return (
    document.getElementById("add-slot-name").value === EMPTY_FIELD ||
    document.getElementById("add-slot-date").value === EMPTY_FIELD ||
    document.getElementById("add-slot-time-start").value === EMPTY_FIELD ||
    document.getElementById("add-slot-time-end").value === EMPTY_FIELD ||
    document.getElementById("add-slot-time-period").value === EMPTY_FIELD
  );
}

addSlotBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //TODO add min date of slot
  //TODO add end hour not before start hour

  if (areThereEmptyFields()) {
    showErrorMessage("Error! Empty Fields! All Fields Are Required!");
  } else {
    hideErrorMessage();
    const slot = {
      name: document.getElementById("add-slot-name").value,
      date: document.getElementById("add-slot-date").value,
      start_hour: document.getElementById("add-slot-time-start").value,
      end_hour: document.getElementById("add-slot-time-end").value,
      period: document.getElementById("add-slot-time-period").value,
    };

    passSlotData(slot);
  }
});

const passSlotData = (slotData) => {
  fetch("../endpoints/addSlot.php", {
    method: "POST",
    body: JSON.stringify(slotData),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status) {
        console.log("Succesfull added new slot!");
      } else {
        showErrorMessage(response.message);
      }
    });
};

const showErrorMessage = (message) => {
  document.getElementById("add-slot-failure").classList.remove("hidden");
  document.getElementById("add-slot-failure-text").innerText = message;
  // shake animation here again
  const panel = document.getElementById("add-slots-form");
  panel.style.animation = "shake 0.3s";
  panel.style.animationIterationCount = "1s";
};
function hideErrorMessage() {
  document.getElementById("add-slot-failure").classList.add("hidden");
}
