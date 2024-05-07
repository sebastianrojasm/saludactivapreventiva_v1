document.addEventListener('DOMContentLoaded', function () {
    // Obteniendo elementos del formulario
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Validación del formulario al enviar
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validar email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Ingrese un correo electrónico válido.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validar contraseña
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Si alguna validación falla, prevenir envío del formulario
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Función para validar email con expresión regular
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
