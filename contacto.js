document.getElementById('enviarBtn').addEventListener('click', function() {
    // Aqui você pode adicionar a lógica para enviar a mensagem ou fazer o que for necessário
    alert('Sua mensagem foi enviada com sucesso! Aguarde resposta e agradecemos o contato.');


    // Limpar os valores dos campos após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});