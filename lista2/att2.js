function verificarOrcamento(num1, num2) {
    if (num1 > num2) {
        return num1 == num1
    } else {
        return num1 !== num1
    }
}

let valorProduto = Number(prompt("Digite o valor do produto: "))
let saldoDisponivel = Number(prompt("Digite o saldo da sua conta: "))

alert(verificarOrcamento(saldoDisponivel, valorProduto))