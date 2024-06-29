import { conectaApi } from "./conectaApi.js";


const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento){
    evento.preventDefault();
   
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-valor]").value;
    const url = document.querySelector("[data-url]").value;
 try{
    await conectaApi.criaProduto(nome,preco,url);
}
catch(erro){
    alert(erro)
}
//    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento=>criarProduto(evento));
