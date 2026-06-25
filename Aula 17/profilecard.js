// A criação do template fora da classe garante que ele seja processado na memória apenas uma vez.
const template = document.createElement('template');
// O comentário /*html*/ ativa o syntax highlight se a extensão 'es6-string-html' estiver instalada no VS Code.
template.innerHTML = /*html*/`
    <style>
        :host {
            display: block;
            margin: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .card {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            max-width: 250px;
            text-align: center;
        }
        .nome {
            color: #2c3e50;
            font-size: 1.4rem;
            margin: 10px 0 5px 0;
        }
        .cargo {
            color: #7f8c8d;
            font-size: 0.95rem;
            margin: 0 0 20px 0;
        }
        /* Estilo base do botão (fallback) */
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #2980b9;
        }
    </style>
    <div class="card">
        <h2 class="nome">Nome Padrão</h2>
        <p class="cargo">Cargo Padrão</p>
        
        <button part="btn-acao">Seguir Perfil</button>
    </div>
`;

// A palavra 'export' transforma este arquivo num Módulo ES6, pronto para ser distribuído.
export class ProfileCard extends HTMLElement {
    // 1. REATIVIDADE: Informa ao navegador quais atributos devem ser vigiados
    static get observedAttributes() {
        return ['nome', 'cargo'];
    }
    constructor() {
        super();
        // Criação do "Campo de Força"
        this.attachShadow({ mode: 'open' });
        // Clonagem profunda do esqueleto HTML para dentro do Shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    // 2. MUTAÇÃO REATIVA: Disparado sempre que 'nome' ou 'cargo' mudarem
    attributeChangedCallback(name, oldValue, newValue) {
        // Otimização: se o valor não mudou, não faz nada
        if (oldValue === newValue) return;
        // Atualiza a interface cirurgicamente
        if (name === 'nome') {
            this.shadowRoot.querySelector('.nome').textContent = newValue || 'Usuário Desconhecido';
        }
        if (name === 'cargo') {
            this.shadowRoot.querySelector('.cargo').textContent = newValue || 'Cargo não informado';
        }
    }
    // 3. COMUNICAÇÃO (EVENTOS): Disparado quando o componente é inserido na tela
    connectedCallback() {
        const btn = this.shadowRoot.querySelector('button');
         // Escutando o clique do botão interno
        btn.addEventListener('click', () => {
            console.log("1. O botão foi clicado DENTRO do componente!"); // Apareceu?
            // Criando uma "encomenda" (CustomEvent) para despachar para a aplicação principal
            const eventoSeguir = new CustomEvent('seguir-clicado', {
                detail: { 
                    usuario: this.getAttribute('nome'),
                    cargo_usuario: this.getAttribute('cargo'),
                    hora_clique: new Date().toLocaleTimeString()
                },
                bubbles: true,   // O evento deve subir pela árvore do DOM
                composed: true   // CRÍTICO: O evento ganha permissão para atravessar o Shadow DOM!
            });

            // O próprio componente "grita" o evento para fora
            this.dispatchEvent(eventoSeguir);
        });
    }
}

// Registro do componente isolado dentro da biblioteca
customElements.define("profile-card", ProfileCard);

