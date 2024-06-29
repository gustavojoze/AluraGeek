async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoJson = await conexao.json();
    return conexaoJson;
}

async function criaProduto(nome, preco, url){
    const conexao = await fetch("http://localhost:3000/produtos", {
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
    const idDelete = await fetch(`http://localhost:3000/produtos/${id}`,{
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
