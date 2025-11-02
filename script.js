// //single element
// //1.getElementByd('my-form)
// // console.log(document.getElementById('my-form'));

// // const form = document.getElementById("my-form");
// // console.log(form);

// //2.document.querySelector()

// const header = document.querySelector("h1"); //this will pretty much grab anything on our html (tag,classes,Id)

// console.log(header);

// console.log(document.querySelector(".container"));

// console.log(document.getElementsByClassName("item"));

// console.log(document.getElementsByTagName("li"));

// console.log(document.querySelectorAll(".item")); //this is a selector for grabbing multiple elements and provides a node list similar to an array where high array methods and properties can also be applied

// const items = document.querySelectorAll(".item");
// items.forEach(function (item) {
//   console.log(item);
// });

// const ul = document.querySelector(".items");
// console.log(ul);
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Ian";
// ul.lastElementChild.innerHTML = "<h1>Hello World</h1>";
// console.log(ul);

// // ul.lastElementChild.remove()

// ul.children[0].innerText = "Clinton";
// // ul.children[2].innerText = "Clinton";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

const btn = document.querySelector(".btn");
btn.addEventListener("mouseout", function (e) {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#3681b3ff";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h2>Hello</h2>";
});
