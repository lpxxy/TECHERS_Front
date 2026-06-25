// main.js

import "./ProdutoCard.js";

const produtos =
    document.querySelectorAll("produto-card");

produtos.forEach(produto => {

    produto.addEventListener(
        "adicionado-ao-carrinho",
        (event) => {

            const { titulo, preco } =
                event.detail;

            alert(
                `Produto ${titulo} no valor de ${preco} foi para o carrinho!`
            );

            console.log(
                `Produto ${titulo} no valor de ${preco} foi para o carrinho!`
            );
        }
    );

});