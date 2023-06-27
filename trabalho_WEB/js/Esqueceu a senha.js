const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtenha o valor do campo de nova senha
  const novaSenha = document.getElementById("newPassword").value;

  // Verifique se o campo de nova senha está vazio
  if (novaSenha.trim() === "") {
    alert("Digite uma nova senha.");
    return;
  }

  // Chame a função para realizar a alteração de senha
  TrocaSenha(novaSenha);
});

function TrocaSenha(novaSenha) {
  // Verifique se há uma senha armazenada no localStorage
  if (localStorage.getItem("novo-password")) {
    // Atualize a senha no localStorage
    localStorage.setItem("novo-password", novaSenha);
    alert("Senha alterada com sucesso!");
  } 

  setTimeout(() => {
    window.location.href = "../pages/Login.html";
  }, 1000);
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  // Obtenha o valor do campo de nova senha
  const novaSenha = document.getElementById("newPassword").value;

  // Verifique se o campo de nova senha está vazio
  if (novaSenha.trim() === "") {
    alert("Digite uma nova senha.");
    return;
  }

  // Chame a função para realizar a alteração de senha
  TrocaSenha(novaSenha);
});




















