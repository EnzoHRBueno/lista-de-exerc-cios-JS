
function somarElementos() {
    const vet = []
    let tam = Number(prompt("Digite quantos elementos tem o vetor: "))
    for (let i = 0; i < tam; i++) {
        let v = Number(prompt("Digite os valores: "))
        vet.push(v)
    }
    return vet
}
function somaArray(vet){
    let somatorio = 0
    for(let elementoAtual of vet){
        somatorio = somatorio + elementoAtual
    }
    return somatorio
}
alert(somarElementos(vet))