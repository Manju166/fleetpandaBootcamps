import {request} from './register.js'

const LOGIN_URL = "https://reqres.in/api/login";

document.getElementById("loginForm").addEventListener("submit", validateForm);
function validateForm(event) {
  event.preventDefault();
  let isValid = false;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (name === "") {
    nameError.textContent = "Username is required.";
  }
  isValid = true;

  if (email === "") {
    emailError.textContent = "Email is required.";
  }
  isValid = true;
  if (password === "") {
    emailError.textContent = "Password is required.";
  }
  isValid = true;

  if (isValid) {
    const formData = {
      name,
      email,
      password,
    };
    request(LOGIN_URL, "POST",formData)
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          alert("loged in Successfully");
          window.location = "posts.html";
        } else {
          alert("Incorrect Username or Email");
        }
      })
      .catch((error) => console.log(error));
  }
}
