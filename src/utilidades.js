export const catalogo = [
  {
    id: "1",
    nome: "cropped manga longa bufante off-white",
    preco: 160,
    imagem: "product-1.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "2",
    nome: "jaqueta em sarja verde militar",
    preco: 260,
    imagem: "product-2.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "3",
    nome: "camiseta manga curta oversized textura",
    preco: 160,
    imagem: "product-3.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "4",
    nome: "cropped lenço em cetim preto",
    preco: 80,
    imagem: "product-4.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "5",
    nome: "blusa mini tee branca san diego",
    preco: 80,
    imagem: "product-5.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "6",
    nome: "cropped jeans corsetado",
    preco: 160,
    imagem: "product-6.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "7",
    nome: "body hauter em tule preto",
    preco: 75,
    imagem: "product-7.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "8",
    nome: "camiseta preta caveira nas costas",
    preco: 90,
    imagem: "product-8.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "9",
    nome: "jaqueta em jeans claro",
    preco: 240,
    imagem: "product-9.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "10",
    nome: "vestido macaquinho romântico preto",
    preco: 120,
    imagem: "product-10.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "11",
    nome: "blusa de manga curta seamless",
    preco: 80,
    imagem: "product-11.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "12",
    nome: "camisa preta em viscose",
    preco: 180,
    imagem: "product-12.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "13",
    nome: "jaqueta sarja off",
    preco: 300,
    imagem: "product-13.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "14",
    nome: "camiseta box com textura canelada",
    preco: 120,
    imagem: "product-14.png",
    feminino: false,
    novidades: true,
  },
  {
    id: "15",
    nome: "top regata seamless",
    preco: 50,
    imagem: "product-15.png",
    feminino: true,
    novidades: true,
  },
  {
    id: "16",
    nome: "regata cropped corselet",
    preco: 90,
    imagem: "product-16.png",
    feminino: true,
    novidades: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `<img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-3 flex flex-col justify-between">
      <p class="text-stone-900 text-sm"> ${produto.nome}</p>
      <p class="text-stone-400 text-xs">Tamanho: M</p>
      <p class="text-stone-950 text-lg font-bold">$${produto.preco}</p>
    </div>
    <div class="flex text-stone-950 items-end absolute bottom-0 right-2 text-lg">
      <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
