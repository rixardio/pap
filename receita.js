// Função para criar lista numerada de itens a partir de texto que 
//contém itens separados por quebras de linha.
function criarListaNumerada(texto) {
    const itens = texto.split('\n').filter(item => item.trim() !== '');
    //Divide o texto em uma array de itens usando \n (quebra de linha) 
    //como delimitador e remove itens vazios.
    
    return itens.map((item, index) => `<li>${index > 0 ? index + 1 + '.' : ''} ${item}</li>`).join('');
    // Mapeia cada item da array para uma string <li> (item de lista) numerado.
}


//adiciona uma nova receita ao contêiner de receitas
function adicionarReceita() {
    const nome = document.getElementById('nome').value; //valor do campo de entrada "nome".
    const ingredientes = document.getElementById('ingredientes').value;//valor do campo de entrada "ingredientes"
    const preparacao = document.getElementById('preparacao').value;//valor do campo de entrada "preparacao"
    const fotoInput = document.getElementById('foto');//referência para o elemento de entrada de arquivo 'foto'.

    if (nome && ingredientes && preparacao && fotoInput.files.length > 0) { //Verifica se todos os campos obrigatórios foram preenchidos e se selecionei a foto
        const foto = URL.createObjectURL(fotoInput.files[0]);//Cria uma URL do objeto para a foto selecionada.

        const novaReceita = document.createElement('div');//Cria um novo elemento div para representar a nova receita.
        novaReceita.classList.add('receita');//adicionar a classe 'receita' à nova div para aplicar estilos.


        //Preenche a div com HTML 
        novaReceita.innerHTML = `
            <h2>${nome}</h2>
            <p>Ingredientes:</p>
            <ol>${criarListaNumerada(ingredientes)}</ol>
            <p>Preparação:</p>
            <ol>${criarListaNumerada(preparacao)}</ol>
            <img src="${foto}" alt="${nome}">

            <button onclick="excluirReceita(this)">Excluir Receita</button>
        `;

        const receitasContainer = document.getElementById('receitas-container');//Obtém o contêiner onde as receitas serão adicionadas.
        receitasContainer.appendChild(novaReceita);//Adiciona a nova receita ao contêiner.

        resetarFormulario('form-receita');// Reseta o formulário após adicionar a receita.
        receitasAdicionadas++;//Atualiza a contagem de receitas adicionadas.

        if (receitasAdicionadas === limiteReceitas) {//Desabilita o botão de adição se atingir o limite de receitas.
            document.getElementById('btnAdicionarReceita').disabled = true;
        }
    } else {
        alert("Por favor, preencha todos os campos obrigatórios e escolha uma foto.");
    }
}

// Função para resetar o formulário
function resetarFormulario(formularioId) {
    document.getElementById(formularioId).reset();
}

// Função para excluir uma receita
function excluirReceita(elemento) {
    const receita = elemento.parentElement;
    receita.parentElement.removeChild(receita);

    // Atualiza o número de receitas adicionadas
    receitasAdicionadas--;

    // Se estiver abaixo do limite, habilita o botão
    if (receitasAdicionadas < limiteReceitas) {
        document.getElementById('btnAdicionarReceita').disabled = false;
    }
}
