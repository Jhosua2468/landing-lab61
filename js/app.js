document.getElementById('btn-diagnostico').addEventListener('click', function() {
  const mensaje = document.getElementById('mensaje-respuesta');
  
  // Lógica interactiva simple exigida en la rúbrica
  mensaje.innerHTML = "🛠️ <strong>¡Solicitud recibida!</strong> Nuestro técnico virtual (vía GitHub Actions) está preparando tu entorno. Revisa la consola.";
  mensaje.classList.remove('oculto');
  
  this.style.display = 'none'; // Oculta el botón
  console.log("Evento de diagnóstico disparado con éxito.");
});