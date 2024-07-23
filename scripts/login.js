function validateForm(event) {
    event.preventDefault();
    let isValid = false;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    //   const password = document.getElementById("password").value;
    //   const errorPassword = document.getElementById("error_password");
    if (name === "") {
      nameError.textContent = "Username is required.";
    } else {
      nameError.textContent = "";
      isValid = true;
    }
    if (email === "") {
      emailError.textContent = "Email is required.";
    } else {
      emailError.textContent = "";
      isValid = true;
    }
    //   if (password === "") {
    //     errorPassword.textContent = "Password is required.";
    //     isValid = false;
    //   } else if (password.length < 6) {
    //     errorPassword.textContent = "Password must be at least 6 characters long.";
    //     isValid = false;
    //   } else {
    //     errorPassword.textContent = "";
    //   }
    if (isValid) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (user) => user.username === name && user.email === email
          );
          if (user) {
              alert("Loged in successfully");
              localStorage.setItem("name",user.name)
              localStorage.setItem("email",user.email)
              window.location = "posts.html"
          } else {
            alert("Incorrect Username or Email");
          }
        })
        .catch((error) => console.log(error));
    }
  }