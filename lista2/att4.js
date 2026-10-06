function exibirResumoProduto(produto){
    return(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.quantidade} unidades`)
}

const produto = {}

produto.nome = String(prompt("Digite o nome do produto: "))
produto.preco = Number(prompt("Digite o preço do produto: "))
produto.quantidade = Number(prompt("Digite a quantidade do produto: "))

alert(exibirResumoProduto(produto))