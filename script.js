const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");
const loginCancelButton = document.getElementById("lobin-form-cancel");

(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }else{
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        event.preventDefault();
        event.stopPropagation();
        if (password.match(/[a-z]/g) && password.match(
            /[A-Z]/g) && password.match(
            /[0-9]/g) && password.match(
            /[^a-zA-Z\d]/g) && password.length >= 8){
           loginSuccessMsg.style.opacity = 1;
           loginErrorMsg.style.opacity = 0;
            }
        else{
           loginErrorMsg.style.opacity = 1;
        }
    }
    form.classList.add('was-validated');
    }, false);
    });
  
    }, false);
    loginCancelButton.addEventListener("click", (e) => {
    loginForm.username.value = loginForm.username.defaultValue;
    loginForm.password.value = loginForm.password.defaultValue;
    location.reload();
})
    })();