const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const button = document.getElementById("btn");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    const passwordValue = password.value;
    const cpasswordValue = localStorage.getItem("password");
    if(passwordValue === cpasswordValue){ 
        alert("Login Successful");
        // Store the password in local storage
        //"password" is the key and passwordValue is the value
        window.location.href = "Home.html";

    }
    else{
        alert("Password Not Matched");
    }
}
)