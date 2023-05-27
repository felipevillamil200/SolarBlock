/*
Esta es una función que ayuda solamente
para el registro de usuarios
*/
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#starlink form");
  const confirmationMsg = document.querySelector("#confirmation-msg");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    confirmationMsg.textContent = "Ahora está registrado para recibir actualizaciones. ¡Gracias por su interés en SolarBlock!";
    confirmationMsg.style.display = "block";
    form.style.display = "none";
  });
});
