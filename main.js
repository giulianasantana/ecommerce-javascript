import { renderizarCatalago } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

renderizarCatalago();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
