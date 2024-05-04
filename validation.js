function validateForm() {
    const firstName = document.getElementById('first-name').value.trim();
    const birthDateStr = document.getElementById('birth-date').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const message = document.getElementById('validation-message');

    // Valida nome
    const nameRegex = /^[a-zA-Z]{7,}$/; // pelo menos 7 letras
    if (!nameRegex.test(firstName)) {
        message.textContent = 'O primeiro nome deve ter pelo menos 7 letras.';
        return;
    }

    // Validar nascimento (regex padrao pra isso)
    const birthDateRegex = /^([0-2][0-9]|3[01])\/(0[1-9]|1[012])\/(19[0-9]{2}|20[01][0-9]|202[0-2])$/;
    if (!birthDateRegex.test(birthDateStr)) {
        message.textContent = 'Data de nascimento inválida. Use o formato dd/mm/yyyy e certifique-se de que o ano está entre 1900 e 2022.';
        return;
    }

    const [day, month, year] = birthDateStr.split('/');
    const birthYear = parseInt(year);

    if (birthYear < 1900 || birthYear > 2022) {
        message.textContent = 'Ano de nascimento deve estar entre 1900 e 2022.';
        return;
    }

    // Valida email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(br|com|net|org)$/;
    if (!emailRegex.test(email)) {
        message.textContent = 'Email inválido. Deve conter @, seguido de domínio válido (.br, .com, .net, org).';
        return;
    }

    // Valida senha
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;

    if (password.length < 6 || password.length > 20) {
        message.textContent = 'A senha deve ter entre 6 e 20 caracteres.';
        return;
    }

    if (!specialCharRegex.test(password) || !numberRegex.test(password) || !/[a-zA-Z]/.test(password)) {
        message.textContent = 'Senha inválida. Deve conter pelo menos um caractere especial, um número e uma letra.';
        return;
    }

    if (password.includes(firstName) || password.includes(birthYear.toString())) {
        message.textContent = 'A senha não deve conter o primeiro nome ou o ano de nascimento.';
        return;
    }

    // Força senha
    if (password.length < 8) {
        message.textContent = 'Senha válida, mas fraca.';
    } else if (password.length <= 12) {
        if (specialCharRegex.test(password) && upperCaseRegex.test(password) && numberRegex.test(password)) {
            message.textContent = 'Senha moderada.';
        } else {
            message.textContent = 'Senha fraca.';
        }
    } else {
        if (password.split('').filter(c => specialCharRegex.test(c)).length > 1 &&
            password.split('').filter(c => numberRegex.test(c)).length > 1 &&
            password.split('').filter(c => upperCaseRegex.test(c)).length > 1) {
            message.textContent = 'Senha forte.';
        } else {
            message.textContent = 'Senha moderada.';
        }
    }
}
