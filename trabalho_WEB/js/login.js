document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.container form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtenha os valores dos campos de entrada
    var username = document.getElementById('validationServer01').value;
    var password = document.getElementById('inputPassword5').value;

    // Validar os campos de entrada (exemplo simples)
    if (username === 'admin' && password === '123456') {
      // Login bem-sucedido
      alert('Login realizado com sucesso!');

      // Redirecionar para a página principal
      window.location.href = '.html';
    } else {
      // Login inválido
      alert('Nome de usuário ou senha incorretos!');
    }
  });
});

