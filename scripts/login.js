function loginSubmit(){
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let isValid =true;
  if (!email) {
    document.getElementById("emailError").innerText = "Email is required";
    isValid = false;
}

if (!password) {
    document.getElementById("passwordError").innerText = "Password is required";
    isValid = false;
}

if (isValid) {
    const userRecords = JSON.parse(localStorage.getItem("users")) || [];
    const user = userRecords.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login Successful");
        window.location.href = "../index.html"; 
    } else {
        alert("Login Failed!! Email address and Password doesnot match");
    }
}

return isValid;
}