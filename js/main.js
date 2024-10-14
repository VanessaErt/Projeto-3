// Aguarda o carregamento completo do documento HTML antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário com o ID 'contact-form'
    const form = document.getElementById('contact-form');

    // Adiciona um ouvinte de evento que aguarda o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

        // Validação do formato do e-mail
        const emailInput = document.getElementById('email-input');
        // valida o formato de e-mail (nome@dominio.com)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Se o valor do campo de e-mail não corresponder ao padrão, exibe um alerta
        if (!emailPattern.test(emailInput.value)) {
            alert('Por favor, insira um e-mail válido.');
            return; // Interrompe o envio do formulário se o e-mail for inválido
        }

        // Se o e-mail for válido, os dados do formulário podem ser enviados
        console.log('Nome:', document.getElementById('name').value);
        console.log('Email:', emailInput.value);
        console.log('Mensagem:', document.getElementById('message').value);
        
        // Limpa o formulário após o envio
        form.reset();
        alert('Mensagem enviada com sucesso!');
    });
});
