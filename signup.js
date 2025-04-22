const namei =  document.getElementById("namei");
const phone =  document.getElementById("ph");
const password = document.getElementById("pass");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = namei.value;
    const phoneValue = phone.value;
    const passwordValue = password.value;

    // Validate password length
    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Store the name, phone, and password in local storage
    localStorage.setItem("name", nameValue);
    localStorage.setItem("phone", phoneValue);
    localStorage.setItem("password", passwordValue);
    window.location.href = "Login.html"; // Redirect to login page

});
