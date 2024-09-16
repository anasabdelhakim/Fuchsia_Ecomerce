"use strict";
const PasswordEyeHidden = document.getElementById("password_hidden");
const Passwordinput = document.getElementById("inputPassword");
const PasswordEmail = document.getElementById("inputEmail");

//switch to another input field

PasswordEmail.focus();
PasswordEmail.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault;
    Passwordinput.focus();
  }
});

// Initialize the visibility icon to be hidden
PasswordEyeHidden.classList.add("unshowPassword");

// Add click event listener to the visibility icon
PasswordEyeHidden.addEventListener("click", function () {
  if (PasswordEyeHidden.classList.contains("fa-eye-slash")) {
    PasswordEyeHidden.classList.replace("fa-eye-slash", "fa-eye");
    Passwordinput.type = "text";
  } else {
    PasswordEyeHidden.classList.replace("fa-eye", "fa-eye-slash");
    Passwordinput.type = "password";
  }
});

// Add input event listener to the password input field
Passwordinput.addEventListener("input", function () {
  if (Passwordinput.value.trim() !== "") {
    PasswordEyeHidden.classList.remove("unshowPassword");
  } else if (Passwordinput.value.trim() === "") {
    PasswordEyeHidden.classList.replace("fa-eye", "fa-eye-slash");
    Passwordinput.type = "password";
    PasswordEyeHidden.classList.add("unshowPassword");
  }
});
