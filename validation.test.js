// validation.test.js
const { validateForm } = require('./validation');

describe('validateForm', () => {
  test('validates a valid form correctly', () => {
    document.body.innerHTML = `
      <div id="validation-message"></div>
      <form id="registration-form">
        <input type="text" id="first-name" value="Beatriz" />
        <input type="text" id="birth-date" value="01/01/2000" />
        <input type="email" id="email" value="test@example.com" />
        <input type="password" id="password" value="Test@1234" />
      </form>
    `;

    validateForm();
    expect(document.getElementById('validation-message').textContent).toBe('');
  });

  test('displays an error for an invalid first name', () => {
    document.body.innerHTML = `
      <div id="validation-message"></div>
      <form id="registration-form">
        <input type="text" id="first-name" value="B" />
        <input type="text" id="birth-date" value="01/01/2000" />
        <input type="email" id="email" value="test@example.com" />
        <input type="password" id="password" value="Test@1234" />
      </form>
    `;

    validateForm();
    expect(document.getElementById('validation-message').textContent).toBe('O primeiro nome deve ter pelo menos 7 letras.');
  });

  // Adicione mais testes conforme necessário
});
