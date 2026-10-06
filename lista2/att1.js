function calcularJurosSimples(capital, taxa, tempo){
    let juros = capital*(taxa/100)*tempo
    return capital+juros
}

let capital = Number(prompt("Digite o valor do capital: "))
let taxa = Number(prompt("Digite o valor da taxa (em porcentagem): "))
let tempo = Number(prompt("Digite o tempo (em meses): "))

alert(calcularJurosSimples(capital, taxa, tempo))