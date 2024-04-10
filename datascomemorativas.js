var ideiasComida = [
    { data: "Dia dos Namorados", comida: "Fondue de Chocolate", imagem: "foundechoco.png", detalhes: "Uma deliciosa opção para compartilhar momentos especiais com chocolate derretido e frutas.", aberto: false },
    { data: "Halloween", comida: "Maçãs do Amor Envenenada", imagem: "macal.png", detalhes: "Maçãs caramelizadas com cobertura de chocolate, uma guloseima divertida para o Halloween.", aberto: false },
    { data: "Natal", comida: "Assado de Peru", imagem: "peru.webp", detalhes: "Peru assado com ervas e temperos natalinos, perfeito para celebrar o Natal em família.", aberto: false },
    { data: "Aniversário", comida: "Bolo Decorado", imagem: "boloaniv.jpg", detalhes: "Um bolo decorado com criatividade para celebrar ocasiões especiais.", aberto: false },
    { data: "Páscoa", comida: "Ovos de Chocolate", imagem: "ovos.webp", detalhes: "Ovos de chocolate recheados com surpresas, uma tradição deliciosa na Páscoa.", aberto: false },
    { data: "Dia da Independência", comida: "Hambúrgueres e Hot Dogs", imagem: "hotburg.png", detalhes: "Um churrasco com hambúrgueres e hot dogs para celebrar o Dia da Independência.", aberto: false },
];

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('ideias-container');

    ideiasComida.forEach(function(ideia) {
        var divIdeia = document.createElement('div');
        divIdeia.classList.add('ideia');

        var imagemHTML = '';
        if (ideia.imagem) {
            imagemHTML = '<img src="' + ideia.imagem + '" alt="' + ideia.comida + '">';
        }

        divIdeia.innerHTML = '<h3>' + ideia.data + '</h3>' +
                            imagemHTML +
                            '<p>' + ideia.comida + '</p>' +
                            '<div class="olho" onclick="toggleDetalhes(' + ideiasComida.indexOf(ideia) + ')">👁️</div>' +
                            '<div class="detalhes" id="detalhes-' + ideiasComida.indexOf(ideia) + '">' +
                            '<p>' + ideia.detalhes + '</p>' +
                            '</div>';

        container.appendChild(divIdeia);
    });
});

function toggleDetalhes(index) {
    var detalhesDiv = document.getElementById('detalhes-' + index);
    ideiasComida[index].aberto = !ideiasComida[index].aberto;

    if (ideiasComida[index].aberto) {
        detalhesDiv.style.display = 'block';
    } else {
        detalhesDiv.style.display = 'none';
    }
}

// Fechar detalhes ao clicar fora da caixa
window.onclick = function(event) {
    ideiasComida.forEach(function(ideia, index) {
        var detalhesDiv = document.getElementById('detalhes-' + index);
        if (event.target !== detalhesDiv && !event.target.classList.contains('olho')) {
            detalhesDiv.style.display = 'none';
            ideiasComida[index].aberto = false;
        }
    });
};
