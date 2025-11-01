//single element
//1.getElementByd('my-form)
// console.log(document.getElementById('my-form'));

// const form = document.getElementById("my-form");
// console.log(form);

//2.document.querySelector()

const header = document.querySelector("h1"); //this will pretty much grab anything on our html (tag,classes,Id)

console.log(header);

console.log(document.querySelector(".container"));

console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("li"));

console.log(document.querySelectorAll(".item")); //this is a selector for grabbing multiple elements and provides a node list similar to an array where high array methods and properties can also be applied

const items = document.querySelectorAll(".item")
items.forEach(function(item){console.log(item)});

const ul = document.querySelector('.items');

ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello'
// console.log(ul)

