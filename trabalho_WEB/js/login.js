let usuario_preCadastrado = {
    "nome": 'Thais',
    "senha": 'senha12'
}
let listaUsuario = [];
listaUsuario.push(usuario_preCadastrado);
sessionStorage.cadastro = JSON.stringify(listaUsuario);

function entrar(){
    let usuario = document.querySelector('#validationServer01');
    let senha = document.querySelector('inputPassword4');

    
    let usuarioValido = {
        "nome": '',
        "senha": ''
    }
    sessionStorage.cadastro = "[]";
    listaUsuario = JSON.parse(sessionStorage.cadastro);

    listaUsuario.forEach(element => {
        if(usuario.value == element.nome && senha.value == element.senha)
        {
            alert('Logado!');
        }
    });
}