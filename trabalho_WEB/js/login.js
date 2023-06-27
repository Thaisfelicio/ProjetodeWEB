const paginaComentarios = "../pages/comentarios.html";
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

let usuario_preCadastrado = {
    nome: 'Thais',
    senha: 'senha12'
}
let listaUsuario = [];
listaUsuario.push(usuario_preCadastrado);
// let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario' || '[]'));
// listaUsuario.push(usuario_preCadastrado);
localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));
// sessionStorage.cadastro = JSON.stringify(listaUsuario);

function entrar(){
    let usuario = document.querySelector('#input_Nome');
    let senha = document.querySelector('#input_Senha');

    
    let usuarioValido = {
        nome: '',
        senha: ''
    }
    // sessionStorage.cadastro = "[]";
    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

    listaUsuario.forEach((elemento) => {
        if(usuario.value == elemento.nome && senha.value == elemento.senha)
        {
            // alert('Logado!');
            usuarioValido = 
            {
                nome: elemento.nome,
                senha : elemento.senha
            };
        }
    });

    if(usuario.value == usuarioValido.nome && senha.value == usuarioValido.senha)
    {
        window.location.href = paginaComentarios;
        console.log("logado")
    }
}

const button = document.querySelector('button');

button.addEventListener("click", ()=>{
    entrar();
})