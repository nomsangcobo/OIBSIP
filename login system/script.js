let signupButton = document.getElementById("signupButton");
let signinButton = document.getElementById("signinButton");
let NameField = document.getElementById("nameField");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");

signinButton.onclick = function () {
  NameField.style.maxHeight = "0";
  title.innerHTML = "Sign in";
  signupButton.classList.add("disable");
  signinButton.classList.remove("disable");
};

signupButton.onclick = function () {
  NameField.style.maxHeight = "60px";
  title.innerHTML = "Sign up";
  signupButton.classList.remove("disable");
  signinButton.classList.add("disable");
};

function handleAuthentication(event, action) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (email === "example@example.com" && password === "password") {
    alert(action + " successful!");
  } else {
    errorMessage.textContent = "Invalid email or password!!!";
  }
}

signinButton.addEventListener("click", function (event) {
  handleAuthentication(event, "Signin");
});

signupButton.addEventListener("click", function (event) {
  handleAuthentication(event, "Signup");
});
