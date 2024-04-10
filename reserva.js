function submitReservation() {
    //obtem os valores dos campos do formulario
    var nome = document.getElementById('nome').value;
    var apelido = document.getElementById('apelido').value;
    var numeroPessoas = document.getElementById('number').value;
    var endereco = document.getElementById('endereço').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (nome && apelido && numeroPessoas && endereco && date && time) {
        //envia os dados para o servidor ou realiza outras ações necessárias
        alert('Reserva confirmada para ' + nome + ' ' + apelido + ' para ' + numeroPessoas + ' pessoas em ' + endereco + ' no dia ' + date + ' às ' + time);
        
        // Limpa o formulário após a reserva
        document.getElementById('reservation').reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

//codigo que faz com que nao deia para escolher o dia anterior
document.getElementById("date").addEventListener("change", function() {
    var hoje = new Date().toISOString().split('T')[0];
    if (this.value < hoje) {
        alert("Selecione um dia valido");
        this.value = "";
    }
});
