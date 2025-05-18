function isValidWHQuestion(question) {
  const regex = /^(what|where|when|why|who|how)\s+(am|is|are)\s+\w+\s+not\s+\w+ing(\s*\w*)*\?$/i;
  return regex.test(question);
}

document.getElementById('question-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const questions = [
    form.q1.value.trim(),
    form.q2.value.trim(),
    form.q3.value.trim(),
    form.q4.value.trim(),
    form.q5.value.trim()
  ];

  let score = 0;

  questions.forEach(q => {
    if (isValidWHQuestion(q)) {
      score++;
    }
  });

  let message = '';
  switch (score) {
    case 5:
      message = '🌟 Excellent! All your questions are perfect!';
      break;
    case 4:
      message = '👍 Great job! Just one little mistake.';
      break;
    case 3:
      message = '🙂 Good effort! Review the structure again.';
      break;
    case 2:
      message = '😐 Keep practicing! You’re getting there.';
      break;
    case 1:
      message = '😕 Almost there. Don’t give up!';
      break;
    default:
      message = '💡 Don’t worry. Practice makes perfect!';
  }

  document.getElementById('result').innerHTML = `
    <p>Your score: <strong>${score}/5</strong></p>
    <p>${message}</p>
  `;
});
