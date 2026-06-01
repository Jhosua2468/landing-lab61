document.getElementById('btn-demo').addEventListener('click', () => {
  const statusBox = document.getElementById('status-box');
  statusBox.innerHTML = '✅ <strong>Pipeline Ejecutado:</strong> Este sitio ha sido actualizado vía GitHub Actions e invalidado en CloudFront automáticamente.';
  statusBox.classList.remove('hidden');
});