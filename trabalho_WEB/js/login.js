const paginaComentarios = "../pages/comentarios.html";
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

let listaUsuario = [];

localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

function entrar(){
    let usuario = document.querySelector('#input_Nome');
    let senha = document.querySelector('#input_Senha');

    let usuarioValido = {
        nome: '',
        senha: ''
    };

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

    listaUsuario.forEach((elemento) => {
        if(usuario.value === elemento.nome && senha.value === elemento.senha)
        {
            usuarioValido = {
                nome: elemento.nome,
                senha : elemento.senha
            };
        }
    });

    if(usuario.value === usuarioValido.nome && senha.value === usuarioValido.senha)
    {
        window.location.href = paginaComentarios;
        console.log("logado");
        let token = Math.random().toString(16).substring(2);
        console.log(token);
        localStorage.setItem('token', token);
    }

    setTimeout(() =>{
        window.location.href = "../pages/comentarios.html";
    }, 1000);
}

const button = document.querySelector('button');

button.addEventListener("click", ()=>{
    entrar();
});
