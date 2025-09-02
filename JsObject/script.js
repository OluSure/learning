    const person = {
      name: "Abe",
      age: 30,
      city: "London",
      email: "email@gmail.com",
      phone: "123-456-7890",
      interest: "Reading and Traveling"
    };
    console.log (`Your details are - Name: ${person.name}, Age: ${person.age}, City: ${person.city}, Email: ${person.email}, Phone: ${person.phone}, Interest: ${person.interest}.`);


const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.onclick = function() {
    result.textContent = `Your details are - Name: ${names.value}, Age: ${age.value}, City: ${city.value} , Email: ${email.value}, Phone: ${phone.value}, Interest: ${interest.value}.`;
}