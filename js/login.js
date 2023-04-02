const form = document.querySelector('form');
const emailInput = document.querySelector('#floatingInput');
const passwordInput = document.querySelector('#floatingPassword');

form.addEventListener('submit', (event) => {
  // evita que el formulario se envíe de manera predeterminada
  event.preventDefault();

  // realiza la validación de los campos de entrada del formulario
  if (emailInput.value.trim() === '') {
    const emailError = document.querySelector('#emailError');
    emailError.textContent = 'El correo electrónico es obligatorio.';
    emailError.classList.add('show');

    return;
  }

  if (passwordInput.value.trim() === '') {
    const passwordError = document.querySelector('#passwordError');
    passwordError.textContent = 'La contraseña es obligatoria.';
    passwordError.classList.add('show');

    return;
  }
 
  // si todos los campos de entrada son válidos, envía el formulario
  form.submit();
   window.location.href = '/home/home.html'; // redirige al usuario a otra página
});
