const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
});

function cadastrar() {
  var usuario = document.getElementById("validationServer01").value;
  var senha = document.getElementById("inputPassword4").value;
  var confirmarSenha = document.getElementById("inputPassword5").value;

  // Verifica se os campos estão preenchidos
  if (usuario && senha && confirmarSenha) {
    if (senha === confirmarSenha) {
      // Obtém os usuários já cadastrados do localStorage
      var usuariosCadastrados = localStorage.getItem("usuarios");
      var usuarios = usuariosCadastrados ? JSON.parse(usuariosCadastrados) : [];

      // Verifica se o usuário já está cadastrado
      var usuarioExistente = usuarios.find(function(u) {
        return u.usuario === usuario;
      });

      if (usuarioExistente) {
        alert("Este usuário já está cadastrado.");
      } else {
        // Cria um novo usuário
        var novoUsuario = {
          usuario: usuario,
          senha: senha
        };

        // Adiciona o novo usuário à lista de usuários
        usuarios.push(novoUsuario);

        // Armazena a lista de usuários atualizada no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

      
        document.getElementById("validationServer01").value = "";
        document.getElementById("inputPassword4").value = "";
        document.getElementById("inputPassword5").value = "";
      }
    } else {
      alert("As senhas não correspondem.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }


  setTimeout(() =>{
    window.location.href = "../pages/Login.html";
}, 1000)
}

const button = document.querySelector ('button');

button.addEventListener('click', ()=>{
  cadastrar();
})