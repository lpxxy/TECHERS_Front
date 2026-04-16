class InfoCards {
    constructor(){
        this.cards = []; // array sem nada - SEM localStorage
        this.form = document.getElementById('InfoCards');
        this.cardsContainer = document.getElementById('Cards');
        this.contador = document.getElementById('contador');
        
        this.init();
    }
    init() {
        this.renderCards();
        this.form.addEventListener('submit', (e) => this.salvarCards(e));
        this.atualizarContador();
    }
    salvarCards(e){
        e.proventDefault();

        const nome = document.getElementById('nome').value.trim();
        const user = document.getElementById('user').value.trim();
        const bio  = document.getElementById('bio').value.trim(); 

        if(!nome || !user || !bio) {
            alert('Por favor, preencha os campos');
            return;
        }

        const novoCards = {
            id: Date.now(),
            nome,
            user,
            bio,
            data: new Date().toLocaleDateString('pt-BR')
        };

        this.cards.unshift(novoCards);
        this.renderCards();
        this.limparForm();
        this.atualizarContador();
    }

    renderCards(){
        this.cardsContainer.innerHTML = '';

        this.cards.forEach(cards => {
            const cardsElement = this.criarElementoCards(cards);
            this.notasContainer.appendChild(notaElement);

        });
    }

    criarElementoCards(cards) {
        const div = document.createElement('div');
        div.className = 'cards';
        div.innerHTML = `
            <button class="delete-btn" onclick="app.deletarCards(${Cards.id})">×</button>
            <div class="Cards-nome">${cards.nome}</div>
            <div class="Cards-user">${cards.user}</div>
            <div class="Cards-bio">${cards.bio}</div>
            <div class="cards-date">${cards.data}</div>
        `;
        return div;
    }

    deletarCards(id) {
        if (confirm('Tem certeza que deseja excluir esta nota?')){
            this.cards = this.cards.filter(cards => cards.id !== id);
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

}


const app = new SocialCards();

