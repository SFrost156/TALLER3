import { registerauth } from './firebase.js';

const save_auth = document.getElementById('rgsbtn');

async function register() {
    const email = document.getElementById('email').value;
    const psw = document.getElementById('password').value;

    // Validar el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@(gmail|hotmail)\.com$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido de Gmail o Hotmail.');
        return;
    }

    // Validar la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(psw)) {
        alert('La contraseña debe contener al menos 6 caracteres con una combinación de 1 letra mayúscula y 1 letra minúscula.');
        return;
    }

    try {
        const verificar = await registerauth(email, psw);
        alert('Registro exitoso para ' + email);
        const user = verificar.user;
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            alert('Usuario en uso. Por favor, cámbielo.');
        } else {
            alert('Registro no exitoso');
        }
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    save_auth.addEventListener('click', register);
});

document.getElementById("exitbtn").addEventListener("click", function() {
    window.location.href = "/Index.html";
});


document.getElementById('show-password').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = 'Ocultar contraseña';
    } else {
        passwordField.type = 'password';
        this.textContent = 'Mostrar contraseña';
    }
  });