// Get the password inputs
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("placeholder");

// Add an event listener to check password match on input change
confirmPasswordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if passwords match
  if (password !== confirmPassword) {
    passwordError.classList.add("error"); // Add error class if passwords don't match
    passwordError.innerText = "* Passwords do not match"; // Display error message
    confirmPasswordInput.style.outline = "none";
    confirmPasswordInput.style.boxShadow = "none";
    confirmPasswordInput.style.border = "2px solid red";
  } else {
    passwordError.classList.remove("error"); // Remove error class if passwords match
    confirmPasswordInput.style.border = "1px solid #000000";
    passwordError.innerText = ""; // Clear error message if passwords match
  }
});
