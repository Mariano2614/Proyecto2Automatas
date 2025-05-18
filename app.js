// script.js

document.getElementById('wh-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar el envío del formulario para manejarlo con JS

  // Definir el patrón para validar las preguntas en forma negativa
  const regex = /^wh\w+\s+(am|is|are)\s+not\s+\w+\s+\w+ing\?/i;

  let score = 0;

  // Obtener las respuestas del formulario
  const questions = [
    document.getElementById('pregunta1').value.trim(),
    document.getElementById('pregunta2').value.trim(),
    document.getElementById('pregunta3').value.trim(),
    document.getElementById('pregunta4').value.trim(),
    document.getElementById('pregunta5').value.trim()
  ];

  // Validar las preguntas
  questions.forEach(question => {
    if (regex.test(question)) {
      score += 1;
    }
  });

  // Mostrar la calificación y el mensaje motivacional
  const resultDiv = document.getElementById('result');
  let message = '';
  let resultClass = '';

  if (score == 5) {
    message = '¡Excelente trabajo! Todas las preguntas están correctas.';
    resultClass = 'success';
  } else if (score >= 3) {
    message = '¡Muy bien! Estás cerca, solo te falta un poco más de práctica.';
    resultClass = 'warning';
  } else {
    message = '¡Sigue practicando! Algunas preguntas no son correctas.';
    resultClass = 'error';
  }

  resultDiv.textContent = `Tu calificación: ${score}/5. ${message}`;
  resultDiv.className = `result ${resultClass}`;
});
