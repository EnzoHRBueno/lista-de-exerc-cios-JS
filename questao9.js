function calcularMediaArray(notas) {
    let soma = 0
    for (let nota of notas) {
        soma = soma + nota
    }

    return soma / 3
}

function avaliarAluno(aluno) {
    aluno = {}
    
    aluno.nome = prompt("Digite o nome do aluno")
    aluno.notas = []

    for (let i = 0; i < 3; i++) {
        aluno.notas[i] = Number(prompt("Digite as notas do aluno: "))
    }
    const media = calcularMediaArray(aluno.notas);

    if (media >= 60) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

}

alert(avaliarAluno())