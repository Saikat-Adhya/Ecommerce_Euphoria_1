const themeToggle = document.getElementById("theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon from moon to sun
  if (themeToggle.classList.contains("ri-moon-line")) {
    themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
  }
});
const logoutButton = document.getElementById('logout');
//Logout functionality

logoutButton.addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("password"); // Remove the password from local storage
    alert("Logged out successfully");
    window.location.href = "Login.html"; // Redirect to login page
})