class InfoCards {
    constructor() {
        this.cards = [];
        this.form = document.getElementById('form-section'); // CORRIGIDO
        this.cardsContainer = document.getElementById('Cards');
        this.contador = document.getElementById('contador');
        this.temaSelect = document.getElementById('tema');
        
        this.init();
    }

    init() {
        this.renderCards();
        this.form.addEventListener('submit', (e) => this.salvarCards(e));
        this.temaSelect.addEventListener('change', () => this.mudarTema()); // NOVO: muda tema
        this.atualizarContador();
    }

    salvarCards(e) {
        e.preventDefault(); // CORRIGIDO: preventDefault

        const nome = document.getElementById('nome').value.trim();
        const user = document.getElementById('user').value.trim();
        const bio = document.getElementById('bio').value.trim();
        const tema = document.getElementById('tema').value; // ADICIONADO: salvar tema

        if (!nome || !user || !bio) { // CORRIGIDO: !bio ao invés de bio
            alert('Por favor, preencha todos os campos');
            return;
        }

        const novoCard = {
            id: Date.now(),
            nome,
            user,
            bio,
            tema, // ADICIONADO: salvar tema do card
            data: new Date().toLocaleDateString('pt-BR')
        };

        this.cards.unshift(novoCard);
        this.renderCards();
        this.limparForm();
        this.atualizarContador();
    }

    renderCards() {
        this.cardsContainer.innerHTML = '';

        this.cards.forEach(card => { // CORRIGIDO: card ao invés de nota
            const cardElement = this.criarElementoCards(card); // CORRIGIDO
            this.cardsContainer.appendChild(cardElement); // CORRIGIDO
        });
    }

    criarElementoCards(card) { // CORRIGIDO: parâmetro card
        const div = document.createElement('div');
        div.className = `card ${card.tema}`; // ADICIONADO: classe do tema
        div.innerHTML = `
            <button class="delete-btn" onclick="app.deletarCards(${card.id})">×</button>
            <div class="card-nome">${card.nome}</div>
            <div class="card-user">@${card.user}</div>
            <div class="card-bio">${card.bio}</div>
            <div class="card-date">${card.data}</div>
        `;
        return div;
    }

    deletarCards(id) {
        if (confirm('Tem certeza que deseja excluir este card?')) {
            this.cards = this.cards.filter(card => card.id !== id); // CORRIGIDO
            this.renderCards();
            this.atualizarContador();
        }
    }

    limparForm() {
        document.getElementById('nome').value = '';
        document.getElementById('user').value = '';
        document.getElementById('bio').value = '';
    }

    atualizarContador() {
        this.contador.textContent = `(${this.cards.length})`;
    }

    // NOVO: Função para mudar tema global
    mudarTema() {
        const tema = this.temaSelect.value;
        document.body.setAttribute('data-theme', tema);
        // Re-renderiza cards para aplicar tema (se necessário)
        this.renderCards();
    }
}

const app = new InfoCards(); // CORRIGIDO: nome da classe