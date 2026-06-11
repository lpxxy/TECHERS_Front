const formulario = document.getElementById('inventario');
const mochilaContainer = document.getElementById('mochila-container');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nomeItem = document.getElementById('NomeItem').value;
    const descricaoItem = document.getElementById('DescricaoItem').value;

    if (nomeItem === '' || descricaoItem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const item = {
        nome: nomeItem,
        descricao: descricaoItem
    };

    criarItemCard(item);

    formulario.reset();
});

function criarItemCard(item) {
    const card = document.createElement('div');
    card.classList.add('item-card');

    const titulo = document.createElement('h3');
    titulo.textContent = item.nome;

    const descricao = document.createElement('p');
    descricao.textContent = item.descricao;

    const botaoDescartar = document.createElement('button');
    botaoDescartar.textContent = 'Descartar';
    botaoDescartar.classList.add('btn-descartar');

    if (item.nome.toLowerCase().includes('lendário')) {
        card.classList.add('item-lendario');
    }

    card.addEventListener('mouseover', function() {
        botaoDescartar.style.display = 'block';
    });

    card.addEventListener('mouseout', function() {
        botaoDescartar.style.display = 'none';
    });

    botaoDescartar.addEventListener('click', function() {

        card.remove();
    });

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(botaoDescartar);

    mochilaContainer.appendChild(card);
}