function somarElementos() {

    const vet = []
    let soma = 0
    for (let i = 0; i < 10; i++) {

        vet[i] = Number(prompt("Digite um numero: "))

    }
    for (let i = 0; i < 10; i++) {
        soma = soma + vet[i]
    }

    return soma
}

alert(somarElementos())