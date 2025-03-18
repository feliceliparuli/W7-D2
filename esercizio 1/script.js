const nameInput = document.getElementById("name");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const prevNameAlert = document.querySelector(".alert-secondary");
const prevNameSpan = prevNameAlert.querySelector("span");
const successAlert = document.querySelector(".alert-success");

function updatePrevName() {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    prevNameSpan.innerText = savedName;
    prevNameAlert.classList.remove("d-none");
  } else {
    prevNameAlert.classList.add("d-none");
  }
}

updatePrevName();

saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const form = document.getElementById("name-form");
  const name = nameInput.value;
  if (name !== null) {
    localStorage.setItem("name", name);
    successAlert.classList.remove("invisible");
    setTimeout(() => successAlert.classList.add("invisible"), 1000);
    updatePrevName();
    form.reset();
  }
});

// Evento click pulsante "Reset"
resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("name");
  updatePrevName();
});
