function validateForm() {
    const firstName = document.getElementById('first-name').value.trim();
    const birthDateStr = document.getElementById('birth-date').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('validation-message');

    // Limpa as classes de estilo de validação anterior
    message.className = 'mt-3';
    message.textContent = '';

    // Valida nome
    const nameRegex = /^[a-zA-Z]{2,}$/; // pelo menos 2 letras
    if (!nameRegex.test(firstName)) {
        message.textContent = 'O primeiro nome deve ter pelo menos 2 letras.';
        message.classList.add('text-danger');
        return;
    }

    // Validar nascimento (regex padrao pra isso)
    const birthDateRegex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[012])\/(19[0-9]{2}|20[01][0-9]|202[0-2])$/;
    if (!birthDateRegex.test(birthDateStr)) {
        message.textContent = 'Data de nascimento inválida. Use o formato dd/mm/yyyy e certifique-se de que o ano está entre 1900 e 2022.';
        message.classList.add('text-danger');
        return;
    }

    const [year] = birthDateStr.split('/')[2];
    const birthYear = parseInt(year);

    if (birthYear < 1900 || birthYear > 2022) {
        message.textContent = 'Ano de nascimento deve estar entre 1900 e 2022.';
        message.classList.add('text-danger');
        return;
    }

    // Valida email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(br|com|net|org)$/;
    if (!emailRegex.test(email)) {
        message.textContent = 'Email inválido. Deve conter @, seguido de domínio válido (.br, .com, .net, org).';
        message.classList.add('text-danger');
        return;
    }

    // Valida senha
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;

    if (password.length < 6 || password.length > 20) {
        message.textContent = 'A senha deve ter entre 6 e 20 caracteres.';
        message.classList.add('text-danger');
        return;
    }

    if (!specialCharRegex.test(password) || !numberRegex.test(password) || !/[a-zA-Z]/.test(password)) {
        message.textContent = 'Senha inválida. Deve conter pelo menos um caractere especial, um número e uma letra.';
        message.classList.add('text-danger');
        return;
    }

    if (password.includes(firstName) || password.includes(birthYear.toString())) {
        message.textContent = 'A senha não deve conter o primeiro nome ou o ano de nascimento.';
        message.classList.add('text-danger');
        return;
    }

    // Força senha
    if (password.length < 8) {
        message.textContent = 'Senha válida, mas fraca.';
        message.classList.add('text-danger');
    } else if (password.length <= 12) {
        if (specialCharRegex.test(password) && upperCaseRegex.test(password) && numberRegex.test(password)) {
            message.textContent = 'Senha moderada.';
            message.classList.add('text-warning');
        } else {
            message.textContent = 'Senha fraca.';
            message.classList.add('text-danger');
        }
    } else {
        if (password.split('').filter(c => specialCharRegex.test(c)).length > 1 &&
            password.split('').filter(c => numberRegex.test(c)).length > 1 &&
            password.split('').filter(c => upperCaseRegex.test(c)).length > 1) {
            message.textContent = 'Senha forte.';
            message.classList.add('text-success');
        } else {
            message.textContent = 'Senha moderada.';
            message.classList.add('text-warning');
        }
    }

    // Se todas as validações passarem, exibe a mensagem de sucesso
    if (message.classList.contains('text-success') || message.classList.contains('text-warning') || message.classList.contains('text-danger')) {
        // Validação específica da senha já definiu uma mensagem
        return;
    }

    // Cadastro validado
    message.textContent = 'Cadastro validado com sucesso!';
    message.classList.add('text-success');
}
