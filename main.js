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
 