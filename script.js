// const button = document.querySelector(".btn");
// button.addEventListener("mouseover", onClick);
// function onClick(event) {
//   event.preventDefault();
//   document.querySelector("#my-form").style.background = "#14b2f0ff";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").children[2].innerHTML = "<h2>Hello</h2>";
// }

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);
// function onSubmit(event) {
//   event.preventDefault();
//   if (nameInput.value === "" || emailInput.value === "") {
//     msg.classList.add("error");
//     msg.textContent = "Please input both fields";
//     setTimeout(() => {
//       msg.classList.remove("error");
//       msg.textContent = "";
//     }, 3000);
//     return;
//   }
// }

myForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.textContent = "Please enter both fields";
    msg.classList.add("error");
    setTimeout(() => {
      msg.textContent = "";
      msg.classList.remove("error");
    }, 3000);
  } else {
    const list = document.createElement("li");
    list.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    list.appendChild(li);


    //clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
