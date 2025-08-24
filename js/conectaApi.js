async function listaProdutos() {
    const conexao = await fetch("https://68ab8fb47a0bbe92cbb7c9cb.mockapi.io/produtos/produtos");
    const conexaoJson = await conexao.json();
    return conexaoJson;
}

async function criaProduto(nome, preco, url){
    const conexao = await fetch("https://68ab8fb47a0bbe92cbb7c9cb.mockapi.io/produtos/produtos", {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome,
            preco:preco,
            url:url
        })
    });
    const conexaoJson = await conexao.json();

    return conexaoJson;
}

async function deletarProduto(id){
    const idDelete = await fetch(`https://68ab8fb47a0bbe92cbb7c9cb.mockapi.io/produtos/produtos/${id}`,{
        method: "DELETE",
        headers:{
            "Content-type": "application/json"
        }
});
    return idDelete  
}


export const conectaApi = {
    listaProdutos, criaProduto, deletarProduto
};
