document.getElementById('cta-btn').addEventListener('click', () => {
  const msgElement = document.getElementById('response-msg');
  // Interactividad básica exigida en el laboratorio
  msgElement.textContent = '¡Suscripción exitosa! 🎉 Pronto recibirás acceso a la beta cerrada.';
  msgElement.classList.remove('hidden');
  
  // Ocultar el botón después de hacer clic
  document.getElementById('cta-btn').style.display = 'none';
});
