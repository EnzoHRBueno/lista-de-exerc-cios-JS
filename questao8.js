function validarSenha(senha) {
    return senha.length >= 6
}

function autenticarUsuario(usuario, senha) {
    usuario = prompt("Digite o nome do usuario: ")
    senha = prompt("Digite a senha do usuario: ")
    function autenticarUsuario(usuario, senha) {
        if (validarSenha(senha)) {
            return `Acesso concedido para ${usuario}`;
        } else {
            return `Senha muito curta para o usuário ${usuario}`;
        }
    }
}