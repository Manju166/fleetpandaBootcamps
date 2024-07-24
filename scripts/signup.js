function validateForm(event) {
  event.preventDefault();
  let isValid = false;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorName = document.getElementById("nameError");
  const errorEmail = document.getElementById("emailError");
  const errorPassword = document.getElementById("passwordError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    errorName.textContent = "Name is required.";
  } else {
    errorName.textContent = "";
    isValid = true;
  }
  if (email === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errorEmail.textContent = "Invalid email format.";
    isValid = false;
  } else {
    errorEmail.textContent = "";
    isValid = true;
  }

  if (password === "") {
    errorPassword.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    errorPassword.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  } else {
    errorPassword.textContent = "";
    isValid = true;
  }

  if (isValid) {
    const formData = {
      name,
      email,
      password,
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("User created successfully");
          window.location = "../App/login.html";
        }
      })
      .catch((error) => console.log(error));
  }
}
