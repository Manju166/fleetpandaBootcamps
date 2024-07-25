import { request } from './request.js';

function validateForm(event) {
  event.preventDefault();
  let isValid = false; 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  nameError.textContent = "";
  emailError.textContent = "";

  if (name === "") {
    nameError.textContent = "Username is required.";
  }
  isValid = true;

  if (email === "") {
    emailError.textContent = "Email is required.";
  }
  isValid = true;

  if (isValid) {
    request("https://jsonplaceholder.typicode.com/users", "GET", { name, email });
  }
}

document.getElementById("loginForm").addEventListener("submit", validateForm);

