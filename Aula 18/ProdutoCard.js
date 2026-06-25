// ProdutoCard.js

export class ProdutoCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 16px;
                    border-radius: 8px;
                    width: 220px;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }

                h3 {
                    margin: 0 0 10px;
                }

                p {
                    font-size: 18px;
                    font-weight: bold;
                }

                button {
                    padding: 10px 16px;
                    border: none;
                    border-radius: 6px;
                    color: white;
                    cursor: pointer;
                    background: #3498db;
                }
            </style>

            <div class="card">
                <h3 id="titulo"></h3>
                <p id="preco"></p>
                <button part="btn-comprar">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
    }

    static get observedAttributes() {
        return ["titulo", "preco"];
    }

    connectedCallback() {
        this.render();

        this.shadowRoot
            .querySelector("button")
            .addEventListener("click", () => {

                const evento = new CustomEvent(
                    "adicionado-ao-carrinho",
                    {
                        detail: {
                            titulo: this.getAttribute("titulo"),
                            preco: this.getAttribute("preco")
                        },
                        bubbles: true,
                        composed: true
                    }
                );

                this.dispatchEvent(evento);
            });
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const titulo = this.getAttribute("titulo");
        const preco = this.getAttribute("preco");

        this.shadowRoot.querySelector("#titulo").textContent = titulo;
        this.shadowRoot.querySelector("#preco").textContent = preco;
    }
}

customElements.define(
    "produto-card",
    ProdutoCard
);