const paginaComentarios = "../pages/comentarios.html";
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
});



// localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

function entrar(){
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
   
    let input_usuario = document.querySelector('#input_Nome').value;
    let input_senha = document.querySelector('#input_Senha').value;
    let usuarioLogado = usuarios.find(usuario => usuario.usuario === input_usuario && usuario.senha === input_senha);
     localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

    if(usuarioLogado) 
    {
        console.log("logado");
        window.location.href = paginaComentarios;
        console.log("logado");
        let token = Math.random().toString(16).substring(2);
        console.log(token);
        localStorage.setItem('token', token);
    }
    else
    {
        console.log("não");
    }
}

const button = document.querySelector('button');

button.addEventListener("click", ()=>{
    entrar();
});
