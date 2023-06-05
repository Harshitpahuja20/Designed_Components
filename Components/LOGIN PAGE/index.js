let heading1 = document.querySelector(".h1");
let heading2 = document.querySelector(".h2");
let signup = document.querySelector(".signup");
let box = document.querySelector(".box");
let signupLink = document.querySelector(".signupLink");
let loginLink = document.querySelector(".loginLink");

function signUp() {
  signup.style.transition = "0.4s ease-in-out";
  signup.style.height = "100%";
  signup.style.transform = "translate(0%, 18%)";
  signup.style.padding = "0px 20px 20px 10px";
  heading1.style.background = "white";
  heading1.style.borderRadius = "0 0 100% 100%";
  signup.style.background = "#00aaff";
  setTimeout(() => {
    heading1.style.margin = "-20px -10px 10px -10px";
    box.style.background = "#00aaff";
  }, 300);
}

function login() {
  signup.style.transition = "0.4s ease-in-out";
  signup.style.transform = "translate(0%, 90%)";
  signup.style.background = "white";
  box.style.background = "white";
  signup.style.padding = "0px";
  heading1.style.margin = "0";
  heading1.style.white = "#00aaff";
  heading1.style.borderRadius = "0";
}

heading2.addEventListener("click", signUp);
signupLink.addEventListener("click", signUp);
heading1.addEventListener("click", login);
loginLink.addEventListener("click", login);
