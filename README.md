# lista-de-exerc-cios-JS
Repostitório criado para a lista de atividades do dia 22/09


1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).

2. Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar.

3. Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).

4. Crie uma função chamada calcularIMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"

5. Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total.

6. Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]."

7. Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.

8. Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".

9. Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".

10. Escreva um programa completo para análise de uma turma contendo três
funções:
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso
contrário.
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4
alunos (armazenando-os num array de objetos), chama contarAprovados e
exibe o total de aprovados no console.log.
