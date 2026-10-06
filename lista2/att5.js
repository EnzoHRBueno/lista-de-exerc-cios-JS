function calcularSubtotalItens(item){
    let subtotal = item.preco*item.quantidade
    return subtotal
}

function calcularTotalCarrinho() {
    const vet = []
    let soma = 0
    for (let i = 0; i < 5; i++) {
        vet[i]= {}
        vet[i].preco = Number(prompt("Digite o preco do produto: "))
        vet[i].quantidade = Number(prompt("Digite a quantidade do produto: "))
        soma = soma + calcularSubtotalItens(vet[i])
    }
    return soma
}

alert(calcularTotalCarrinho())