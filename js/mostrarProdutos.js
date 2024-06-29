import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")


function constroiProduto(id,nome, preco, url){
const produto = document.createElement("div");
produto.className = "produto";
produto.setAttribute('data-id',id)
produto.innerHTML = `
                    <img src="${url}" alt="imagem do produto" class="produto_imagem">
                    <div class="produto_titulo">
                        <p>${nome}</p>
                    </div>
                    <div class="produto_valor">
                        <strong>
                            <p>R$ ${preco}</p>
                        </strong>
                        <img src="./imagens/lixoMenor.png" alt="icone da lixeira" data-lixo>
                    </div>
                    
`
const deleteProduto = produto.querySelector('[data-lixo]') 
deleteProduto.addEventListener('click', async(evento)=>{
    evento.preventDefault()
    await conectaApi.deletarProduto(id)
    produto.remove()
})
return produto;
}

async function listaProduto(){
    try{
    lista.innerHTML=""
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach((elemento) => lista.appendChild(
        constroiProduto(elemento.id,elemento.nome, elemento.preco, elemento.url)))
    }
    catch(erro){
     lista.innerHtml = `<h2>Ocorreu um erro tente novamente</h2>`
    }
    
    }
 
listaProduto()

const btLimpar = document.querySelector(".botao_limpar");
btLimpar.addEventListener('click', function() {
  document.querySelectorAll('input').forEach(input => input.value = "");
});

