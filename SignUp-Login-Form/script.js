const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');
const Eyecon = document.querySelectorAll('.Eyecon');
const passwordInputs = document.querySelectorAll('input[type="password"]');

Eyecon.forEach((eye, index) => {
    eye.addEventListener('click', () => {
        if (passwordInputs[index].type === "password") {
            passwordInputs[index].type = "text";
            eye.classList.remove('fa-eye');
            eye.classList.add('fa-eye-slash');
        } else {
            passwordInputs[index].type = "password";
            eye.classList.remove('fa-eye-slash');
            eye.classList.add('fa-eye');
        }
    });
});

RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
});

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
});