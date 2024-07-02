# Projeto de Validação de Campos

Este projeto é uma aplicação de validação de campos de formulário utilizando HTML, JavaScript e bibliotecas de front-end. O objetivo é validar os dados inseridos em um formulário de cadastro de usuário, garantindo que estejam no formato correto.

## Validações Realizadas

- **Primeiro Nome**: Deve conter pelo menos 7 letras.
- **Data de Nascimento**: Deve estar no formato `dd/mm/yyyy` e o ano deve estar entre 1900 e 2022.
- **Email**: Deve ser um email válido e seguir o formato padrão (e.g., usuario@dominio.com).
- **Senha**: Deve ter entre 6 e 20 caracteres e conter pelo menos:
  - Um caractere especial
  - Um número
  - Uma letra
  - Não deve conter o primeiro nome ou o ano de nascimento

## Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/field-validation-project.git
cd field-validation-project
