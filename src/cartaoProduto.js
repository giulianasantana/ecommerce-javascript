import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalago() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-stone-400 rounded-lg group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }" id="card-produto-${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.imagem}"
    alt="Produto da Youcom." class="group-hover:scale-110 duration-300 my-3 rounded-lg"/>
    
    <p class="text-sm text-center">${produtoCatalogo.nome}</p>
    <p class="text-sm font-semibold text-center">$${produtoCatalogo.preco}</p>
    <button id='adicionar-${
      produtoCatalogo.id
    }' class='bg-stone-950 hover:bg-stone-700 text-stone-200'
    ><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
