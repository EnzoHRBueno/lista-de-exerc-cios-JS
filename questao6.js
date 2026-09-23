function formatarPessoa() {
    const pessoa = {}
    pessoa.nome = prompt("Digite o nome: ")
    pessoa.idade = prompt("Digite a idade: ")
    pessoa.profissao = prompt("Digite a profissão: ")

    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}`
}
alert(formatarPessoa())