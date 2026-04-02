class AppNotas {
    constructor() {
        this.notas = JSON.parse(localStorage.getItem('notas')) || [];
        this.form = document.getElementById('InfoNotas');
        this.notasContainer = document.getElementById('Notas');
        this.contador = document.getElementById('contador');
        
        this.init();
    }

    init() {
        this.renderNotas();
        this.form.addEventListener('submit', (e) => this.salvarNota(e));
        this.atualizarContador();
    }

    salvarNota(e) {
        e.preventDefault();
        
        const titulo = document.getElementById('titulo').value.trim();
        const conteudo = document.getElementById('info').value.trim();

        if (!titulo || !conteudo) {
            alert('Por favor, preencha título e conteúdo!');
            return;
        }

        const novaNota = {
            id: Date.now(),
            titulo,
            conteudo,
            data: new Date().toLocaleDateString('pt-BR')
        };

        this.notas.unshift(novaNota); // Adiciona no início
        this.salvarNoLocalStorage();
        this.renderNotas();
        this.limparForm();
        this.atualizarContador();
    }

    renderNotas() {
        this.notasContainer.innerHTML = '';

        this.notas.forEach(nota => {
            const notaElement = this.criarElementoNota(nota);
            this.notasContainer.appendChild(notaElement);
        });
    }

    criarElementoNota(nota) {
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `
            <button class="delete-btn" onclick="app.deletarNota(${nota.id})">×</button>
            <div class="note-title">${nota.titulo}</div>
            <div class="note-content">${nota.conteudo}</div>
            <div class="note-date">${nota.data}</div>
        `;
        return div;
    }

    deletarNota(id) {
        if (confirm('Tem certeza que deseja excluir esta nota?')) {
            this.notas = this.notas.filter(nota => nota.id !== id);
            this.salvarNoLocalStorage();
            this.renderNotas();
            this.atualizarContador();
        }
    }

    limparForm() {
        document.getElementById('titulo').value = '';
        document.getElementById('info').value = '';
    }

    salvarNoLocalStorage() {
        localStorage.setItem('notas', JSON.stringify(this.notas));
    }

    atualizarContador() {
        this.contador.textContent = `(${this.notas.length})`;
    }
}

const app = new AppNotas();