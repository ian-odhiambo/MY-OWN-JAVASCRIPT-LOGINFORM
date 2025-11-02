const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#user");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter both fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log("successs");
  }
}
