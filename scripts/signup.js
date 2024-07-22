function saveData() {
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);
  // localStorage.setItem("password", password);

  let isValid = true;

  if (name == null || name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    isValid = false;
  }

  const passwordpattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (password === "") {
    document.getElementById("passwordError").innerText =
      "Password is required.";
    isValid = false;
  } else if (!passwordpattern.test(password)) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    isValid = false;
  }

  if (isValid) {
    let userRecords = JSON.parse(localStorage.getItem("users")) || [];
    userRecords.push({
      name: name,
      email: email,
      password: password
    });
    localStorage.setItem("users", JSON.stringify(userRecords));
    alert("Registration Successful");
}
  //   // alert(`Name: ${name}\nEmail: ${email}\nPhone no: ${phone}\nPassword: ${password}\nCountry :${country}`);
  //   const signupData = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     password: password,
  //     country: country,
  //   };
  //   alert(JSON.stringify(signupData));
  // }
  return isValid;
  
}
