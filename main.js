 // script.js

 const toggleButton = document.getElementById("theme-toggle");
 const body = document.body;

 // Check for saved theme in localStorage
 if (localStorage.getItem("theme") === "dark") {
   body.classList.add("dark");
 }

 // Toggle theme on button click
 toggleButton.addEventListener("click", () => {
   body.classList.toggle("dark");

   // Save theme preference in localStorage
   if (body.classList.contains("dark")) {
     localStorage.setItem("theme", "dark");
   } else {
     localStorage.setItem("theme", "light");
   }
 });

 //Animation
window.addEventListener('scroll', function() {
let products = document.querySelectorAll('#cards');
products.forEach(function(product) {
 let position = product.getBoundingClientRect().top;
 let windowHeight = window.innerHeight;

 if (position < windowHeight) {
   product.classList.add('visible');
 }
});
});

window.addEventListener('scroll', function() {
let products = document.querySelectorAll('.about-img');
products.forEach(function(product) {
 let position = product.getBoundingClientRect().top;
 let windowHeight = window.innerHeight;

 if (position < windowHeight) {
   product.classList.add('visible');
 }
});
});

window.addEventListener('scroll', function() {
let products = document.querySelectorAll('.card');
products.forEach(function(product) {
 let position = product.getBoundingClientRect().top;
 let windowHeight = window.innerHeight;

 if (position < windowHeight) {
   product.classList.add('visible');
 }
});
});

window.addEventListener('scroll', function() {
let products = document.querySelectorAll('#contactMe');
products.forEach(function(product) {
 let position = product.getBoundingClientRect().top;
 let windowHeight = window.innerHeight;

 if (position < windowHeight) {
   product.classList.add('visible');
 }
});
});

window.addEventListener('scroll', function() {
let products = document.querySelectorAll('.aboutmebio');
products.forEach(function(product) {
 let position = product.getBoundingClientRect().top;
 let windowHeight = window.innerHeight;

 if (position < windowHeight) {
   product.classList.add('visible');
 }
});
});

