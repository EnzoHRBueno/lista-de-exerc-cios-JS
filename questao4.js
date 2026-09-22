function calcularIMC() {
    let peso = Number(prompt("Digite o peso: "))
    let altura = Number(prompt("Digite a altura: "))
    let imc = peso / (altura * altura)
    return imc
}

let result = calcularIMC()
if (result <= 18.5) {
    alert("Abaixo do peso")
}
if (result >= 18.5 && result <= 24.9) {
    alert("Peso normal")
}
if (result >= 24.9) {
    alert("Sobrepeso")
}