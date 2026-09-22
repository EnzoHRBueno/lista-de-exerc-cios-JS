function calcularAreaRetangulo(){
    let base = Number(prompt("Digite o valor da base do retangulo: "))
    let altura = Number(prompt("Digite o valor altura do retangulo: "))
    let area = base * altura
    return area
}

alert(calcularAreaRetangulo())