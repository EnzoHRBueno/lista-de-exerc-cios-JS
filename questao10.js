function verificarAprovacao(nota) {
    if (nota >= 60) {
        return nota == nota
    } else {
        return nota !== nota
    }
}

function contarAprovados(listaAlunos) {
    let aprov = 0
    for (let nome of listaAlunos) {
        if (verificarAprovacao() == true) {
            aprov += 1
        } else {
            aprov = aprov
        }
    }
    return aprov
}

function executarAnalise() {
    const alunos = []
    for (let i = 0; i < 4; i++) {
        alunos[i] = { }
        alunos.nome = String(prompt("Digite o nome do aluno: "))
        alunos.nota = Number(prompt("Digite a nota do aluno: "))
    }
    return contarAprovados(alunos)
}
console.log(executarAnalise())