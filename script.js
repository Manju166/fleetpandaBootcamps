function validateForm(){
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
     
    let isValid=true;

    if (name==null||name === "") {
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
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must be 10 digits.";
        isValid = false;
    }
   
    const passwordpattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (password === "") {
            document.getElementById("passwordError").innerText = "Password is required.";
            isValid = false;
            }else if (!passwordpattern.test(password)) {
                document.getElementById("passwordError").innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
                isValid = false;
                }
    
                

if(isValid){
    // alert(`Name: ${name}\nEmail: ${email}\nPhone no: ${phone}\nPassword: ${password}\nCountry :${country}`);
    const signupData ={
        name:name,
        email:email,
        phone:phone,
        password:password,
        country:country
    }
    alert(JSON.stringify(signupData))
}
return isValid
};
