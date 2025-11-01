const name = "John"; //string
const age = 30; //number
const isCool = true; //boolean
const rating = 4.5; //number
const x = null;
const y = undefined;
let z;
//the main primitive data types
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof z);
console.log(typeof x);

//strings
//concatenation

console.log("my name is " + name + " and i am " + age + " years old");
console.log(`my name is ${name} and i am ${age} years old`); //this is template strings

//Note the differece between a method and a property.methods have parenthesis and can be described as functions that are associated with the object

const s = "Hello, World";
//console.log(s.toUppercase());
//console.log(s.toLowercase());
//console.log(s.substring())-this normally selects the indexes of the items of what is stored in our object
//we can also combine more than method relating on the same object
//console.log(split()),the parenthesis stores the choice on how we'd like to split that particular value in our object for instance , if we decide to use an empty ('') , this will select

console.log(s.split(""));
const p = "technology, computers, IT";
console.log(p.split(","));
//in this context where ive applied the method console.log(p.split(','))-this will otput automatically a prototype of array , the items are listed as an array of items

//ARRAYS
//they are variables that hold multiple values
//arrays can be created using the array constructor in our declaration, what is output onto our console is an array of items , even the prototype , shows its an array
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// And the pretty obvious way of creating an array- the signature brackets [].

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
console.log(fruits[0]); //the first item wil always start at index 0
console.log(fruits[1]); //the second item will always start at one , the next item will be 2(being our third item in the array)
console.log(fruits[2]); // this when you want to particularly target an single item of the array, this is how its done *im stil conflicted if this a method maybe becoz it has brackets ??
//in every language, arrays are always zero based

fruits[3] = "grapes"; //this method will introduce an item to our array , not necessarily on our text editor but once intialized , it willn show up as the last item on our console

console.log(fruits);
//alternatively , we can use .push as the best way to introduce items onto the array, assuming that an array might bear many items counting also the spaces between each item after the comma might be tiresome when in it comes to counting the index, this comes in handy :fruits.push('mangoes')console.log(fruits)

fruits.push("mangoes");
console.log(fruits);

//.unshift and .pop is for arranging the items *check on h0e its done
//.unshift() introduces a new item to the array but it takes the first index and displaces the first onto the second,  while .pop() takes the last item of the array and places it at the top

console.log(Array.isArray(fruits)); //a method for checking if something is an array,and it returns a boolean of true ,if not it returns a boolean false

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.firstName); //iterations
console.log(person.lastName); //iterations
console.log(person.age); //iterations
console.log(person.hobbies[0]); //iterations
console.log(person.hobbies[1]); //iterations
console.log(person.hobbies[2]); //iterations

//iterations on the embedded objects
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);

//there is another form of iteration which was part of the ES6.** i will look more onto this kind of iteration
const { firstName } = person;
console.log(firstName);

const {
  address: { city },
} = person;
console.log(city);

//array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

console.log(todos[1].text);
//FOR LOOP STATEMENT
for (let i = 0; i <= 10; i++) {
  console.log(i);
} // this is the basic loop statement that are used in iteration of arrays.arrays are variables with more than one value
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//using while as a mode of iteration

//WHILE LOOP STATEMENT
//let i = 0;-this is initialization, in the declaration of the variable where value 0 is assigned to the variable
//while(i < 9)-this is the next part , the evaluation of the condition that translates to TRUE
//the next phase is the execution of the block of code , and then returns to the update(increament) and back to the first part where what is passed from the loop back is now being assigned to variable i as our new value , it undergoes the same process repeatedly until it is nolonger true , that is when its stops
let i = 0;

while (i < 9) {
  console.log(i + 1);
  i++;
}

//using the while loop on array

const colors = ["Red", "Blue", "Green", "Orange", "Purple"];

let color = 0;
while (color < colors.length) {
  console.log(colors[color]);
  color++;
}
//This pattern continues...
// Loop #	color value	Condition Check	What Prints	After Increment
// 1	0	0 < 5 → TRUE ✅	"Red"	color = 1
// 2	1	1 < 5 → TRUE ✅	"Blue"	color = 2
// 3	2	2 < 5 → TRUE ✅	"Green"	color = 3
// 4	3	3 < 5 → TRUE ✅	"Orange"	color = 4
// 5	4	4 < 5 → TRUE ✅	"Purple"	color = 5

// PROBLEM: Arrays start at 0, so valid positions are 0-4

// colors[0] = "Red"

// colors[1] = "Blue"

// colors[2] = "Green"

// colors[3] = "Orange"

// colors[4] = "Purple"

// colors[5] = DOES NOT EXIST

let j = 0;
do {
  console.log(j + 1);
  // j++;
  j++;
  //j = j + 1
} while (j < 10);

//use a while loop to write the following sentence in the console:"The speed of the car is xMPH"(where x is the number of miles per hour).start from o and go all the way up to 100,in increament of 10

for (let n = 1; n <= 10; n++) {
  console.log(n);
}

let X = 0;
while (X <= 100) {
  console.log(`${X}MPH`);
  X += 10;
}

//Create two variables a = 1, b = 10.Use the right loop print out numbers 1-10, making sure to execute the code at least once before testing the condition
let a = 1;
let b = 10;
do {
  console.log(a);
  a++;
} while (a <= b);

//A grocery store wants a small program that records a list of items a customer bought and prints them in a clear, numbered list with the total number of items purchased.

// function recordList(cashier) {
//   const myList = ["mango", "plum", "coconut", "mapera", "guava"];
//   for (let item = 0; item < myList.length; item++) {
//     console.log(`${item + 1}.${myList[item]}`);
//   }

//   console.log(`number of items: ${myList.length}`);
// }
// recordList(myList);

//A school needs a program that stores student details including their names and marks in multiple subjects. The program should display each student’s average and whether they passed or failed.
const student = [
    {name:'Ian Odhiambo', math:100, science:70, french:56, homeScience:70},
    {name:'Alice Wahome', math:80, science:60, french:50, homeScience:50},
    {name:'Ruto Samoei', math:60, science:50, french:45, homeScience:40},
    {name:'Chris Brown', math:40, science:40, french:35, homeScience:30},
    {name:'Sanaipei Tande', math:35, science:30, french:25, homeScience:10}
];

 
for(let i = 0; i < student.length; i++){
    if((student[i].math + student[i].science + student[i].french + student[i].homeScience)/4 >= 70) {

        console.log(`${student[i].name} has an average of ${(student[i].math + student[i].science + student[i].french + student[i].homeScience)/4} has a PASS`)

    } else if((student[i].math + student[i].science + student[i].french + student[i].homeScience)/4 < 70){

        console.log(`${student[i].name} has an average of ${(student[i].math + student[i].science + student[i].french + student[i].homeScience)/4} has a FAIL`)

    } 
}
//A shop owner wants a system that records the products available, their quantities, and prices.The program should calculate how much money is tied up in stock and identify any items that need to be restocked.




//A local library wants a simple program where staff can search for books by title. If a book exists in the catalog, display its title, author, and whether it is available. If it doesn’t exist, display a “Not found” message.





const companies = [
    {name:"Company one", category:"Finance", Start:1981, end:2003},
    {name:"Company Two", category:"Retail", Start:1992, end:2008},
    {name:"Company Three", category:"Auto", Start:1999, end:2007},
    {name:"Company Four", category:"Retail", Start:1989, end:2010},
    {name:"Company Five", category:"Technology", Start:2009, end:2014},
    {name:"Company Six", category:"Finance", Start:1987, end:2010},
    {name:"Company Seven", category:"Auto", Start:1986, end:1996},
    {name:"Company Eight", category:"Technology", Start:2011, end:2016},
    {name:"Company Nine", category:"Retail", Start:1981, end:1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for
// for(i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }


//forEach
// companies.forEach(function(company){console.log(company.name)})

//filters
let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink)


let accolyte = [];
let fledging = [];
let pioneer = [];
for(let i = 0; i < companies.length; i++){
    if((companies[i].end - companies[i].Start) <= 10 ) {
        accolyte.push(companies[i].name);

    }else if((companies[i].end - companies[i].Start) >10 && (companies[i].end - companies[i].Start) <=21){
        fledging.push(companies[i].name);

    }else if((companies[i].end - companies[i].Start) > 21 && (companies[i].end - companies[i].Start) <=30) {
        pioneer.push(companies[i].name);
    }
}

console.log(accolyte);
console.log(fledging);
console.log(pioneer);

