function aplicarDesconto(valor) {
    let desconto = valor * 0.1
    return valor - desconto
}

function processarVenda() {
    let valor = Number(prompt("Digite o valor do produto: "))
    if (valor > 100) {
        return aplicarDesconto(valor)
    } else {
        return valor
    }
}

alert(processarVenda())