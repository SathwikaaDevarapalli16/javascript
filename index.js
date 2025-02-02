//console.log(`Hello`);
//console.log(`I like Pizza`);


//window.alert(`This is an alert`);
//window.alert(`I ike pizza`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like Pizza`;

//This is a comment.
/*
this is a comment
*/
//let age = 25;
//let price = 10.99;
//let gpa = 2.1;
//let firstname = `Sathwikaa`;
//let email = "sathwikaa.devarapalli@gmail.com";
//let online = true;
/* let fullname = "Sathwikaa D";
let age = 25;
let IsStudent = true;

*console.log(`You are ${age} years old`);
console.log(`You are ${price} years old`);
console.log(`You are ${gpa} years old`);
console.log(typeof age);
console.log(typeof firstname);
console.log(`My firstname is ${firstname}`);
console.log(` Your email is ${email}`);
*/
//console.log(`Bro is online:${online}`);


//document.getElementById("p1").textContent = `Your name is ${fullname}`;
//document.getElementById("p2").textContent = `your age is ${age}`;
//document.getElementById("p3").textContent = `Enrolled in school: ${IsStudent}`;

//let students = 37;

//students = students + 1;
//students = students - 1;
//students = students * 2;

//students = students ** 2;

//extrastudents = students % 2;
//console.log(extrastudents);

// USER INPUT

//let username;

//window.prompt(username);

// USING HTML TEXT BOX
/*

let username;
document.getElementById("mybutton").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}
*/

// 

//TYPE CONVERSION

/*

let age = window.prompt(`Waht is your age?`);
age = Number(age);
age+=1;
console.log(age);
console.log(typeof age);

*/

//constant usage usecase: finding circumferance of cricle

const PI = 3.14159;
let radius;
let circumferance;
document.getElementById("mybutton").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumferance = 2 * PI * radius;
    document.getElementById("myH3").textContent = `Your value for circumferance is ${circumferance}  cm `;
}

