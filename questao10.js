function verificarAprovacao(nota) {
    return nota >= 60
}

function contarAprovados(listaAlunos) {
    let aprov = 0
    for (let alunos of listaAlunos) {
        if (verificarAprovacao(alunos.nota)) {
            aprov++
        }

    }
    return aprov
}

function executarAnalise() {
    const alunos = []
    for (let i = 0; i < 4; i++) {
        alunos[i] = {}
        alunos[i].nome = String(prompt("Digite o nome do aluno: "))
        alunos[i].nota = Number(prompt("Digite a nota do aluno: "))
    }
    return contarAprovados(alunos)
}
console.log(executarAnalise())