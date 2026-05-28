const form = document.getElementById('inventario');
const mochilaContainer = document.getElementById('mochila-container');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const nomeItem = document.getElementById('NomeItem').value;
    const descricaoItem = document.getElementById('DescricaoItem').value;

    if (nomeItem === '' || descricaoItem === '' ){

        alert('Preeencha todos os campos!!!');
        return;
    }

    const item = {
        nome: nomeItem,
        descricao: descricaoItem
    };

    criarItemCard(item);
});

function criarItemCard(item){
    const card = document.createElement('div');
    card.classList.add('item-card');

    const titulo = document.createElement('h3');
    titulo.textContent = item.nome;

    const descricao = document.createElement('p');
    descricao.textContent = item.descricao;

    const botaoDescartar = document.createElement('button');
    botaoDescartar.textContent = 'Descarta';
    botaoDescartar.classList.add('btn-descartar');


    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(botaoDescartar);

    if (item.nome.toLowerCase().includes('lendario')){
        card.classList.add('item-lendario');
    }

    mochilaContainer.appendChild(card);

    formulario.reset();
}