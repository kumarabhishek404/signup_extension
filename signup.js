var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', function loginAndSignup() {

    var signupBox = document.getElementById('signupBox');
    var loginBox = document.getElementById('loginBox');

    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
        signupBox.style.display = "none"
        loginBtn.innerHTML = "Sign Up"
    } else {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
        loginBtn.innerHTML = "Sign In"
    }
})
