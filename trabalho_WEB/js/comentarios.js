let cardId = 0;

const comentar = document.querySelector('#comment_button');
const secaoComentarios = document.querySelector('#secaoComentarios');

const iconeEditar = '../img/edit_FILL0_wght400_GRAD0_opsz48.svg';
const iconeExcluir = '../img/delete_FILL0_wght400_GRAD0_opsz48.svg';
const iconeCurtir = '../img/favorite_FILL0_wght400_GRAD0_opsz48.svg';
const iconeCurtido = '../img/coracao_preenchido.png';

function botao_comentarios(icone, palavra_botao, cor_botao) {
  let botao = document.createElement("button");
  botao.classList.add("btn");
  botao.classList.add("btn-primary");
  botao.classList.add("botao_comentario");
  botao.style.backgroundColor = '#' + cor_botao;

  let icone_botao = document.createElement("img");
  icone_botao.classList.add("icones");
  icone_botao.src = icone;

  let span = document.createElement("span");
  span.innerHTML = palavra_botao;

  botao.appendChild(icone_botao);
  botao.appendChild(span);

  return botao;
}

function criarCardComentario(nomeUsuario, comentario) {
  let card = document.createElement('div');
  card.classList.add("card");
  card.setAttribute('data-card-id', cardId); // Adiciona atributo data-card-id com o ID do card

  let card_body = document.createElement('div');
  card_body.classList.add("card-body");

  let nome = document.createElement('h5');
  nome.classList.add("card-title");
  nome.innerHTML = nomeUsuario + " comentou";

  let conteudo = document.createElement('p');
  conteudo.classList.add("card-text");
  conteudo.innerHTML = comentario;

  let botoes = document.createElement('div');
  botoes.classList.add("botoes");

  let editar = botao_comentarios(iconeEditar, "Editar", "FFCC00");
  let excluir = botao_comentarios(iconeExcluir, "Excluir", "FF0000");
  let curtir = botao_comentarios(iconeCurtir, "Curtir", "00CCFF");
  curtir.id = 'curtido';

  let contadorCurtidas = document.createElement('span');
  contadorCurtidas.classList.add('contador-curtidas');
  contadorCurtidas.innerHTML = '0';

  // Lista para armazenar os IDs dos usuários que curtiram o comentário
  let usuariosQueCurtiram = [];

  card_body.appendChild(nome);
  card_body.appendChild(conteudo);
  botoes.appendChild(editar);
  botoes.appendChild(excluir);
  botoes.appendChild(curtir);
  botoes.appendChild(contadorCurtidas);
  card_body.appendChild(botoes);
  card.appendChild(card_body);

  // Função para verificar se o usuário já curtiu o comentário
  function usuarioJaCurtiu() {
    const usuarioAtual = localStorage.getItem('userId'); // Substitua 'userId' pelo nome da chave utilizada para armazenar o ID do usuário no localStorage
    return usuariosQueCurtiram.includes(usuarioAtual);
  }

  curtir.addEventListener("click", () => {
    const cardId = card.getAttribute('data-card-id');
    const contadorCurtidas = card.querySelector('.contador-curtidas');
    const iconeCurtir = curtir.querySelector('.icones');
    const cardCurtido = card.querySelector('.card-body');
    // iconeCurtir.classList.add("icones");
    curtir.src = iconeCurtido;
    // curtir.classList.add("icones");
    curtir.style.scale = '0.1';

    // Verifica se o usuário já curtiu o comentário
    if (usuarioJaCurtiu()) {
      alert('Você já curtiu este comentário.');
      return;
    }

    // Adiciona o ID do usuário à lista de usuários que curtiram
    const usuarioAtual = localStorage.getItem('userId'); // Substitua 'userId' pelo nome da chave utilizada para armazenar o ID do usuário no localStorage
    usuariosQueCurtiram.push(usuarioAtual);

    iconeCurtir.src = iconeCurtido;
    contadorCurtidas.innerHTML = parseInt(contadorCurtidas.innerHTML) + 1;
    cardCurtido.style.backgroundColor = '#ffecb3';
  });

  // Insere o novo card no início da seção de comentários
  if (secaoComentarios.firstChild) {
    secaoComentarios.insertBefore(card, secaoComentarios.firstChild);
  } else {
    secaoComentarios.appendChild(card);
  }

  editar.addEventListener("click", () => {
    const cardId = card.getAttribute('data-card-id');
    const conteudoElement = card.querySelector('.card-text');

    const novoComentario = prompt("Edite o comentário:", conteudoElement.innerHTML);
    if (novoComentario != null && novoComentario.trim() !== '') {
      conteudoElement.innerHTML = novoComentario;
    }
  });

  excluir.addEventListener("click", () => {
    const cardId = card.getAttribute('data-card-id');
    const cardParaRemover = document.querySelector(`[data-card-id="${cardId}"]`);
    cardParaRemover.remove();
  });
}

comentar.addEventListener("click", () => {
  // Verifica se o usuário está autenticado antes de exibir o modal de comentário
  console.log('Usuário está autenticado. Exibindo o modal de comentário.');
  $('#modalComentario').modal('show');
});

document.getElementById('btnSalvarComentario').addEventListener("click", () => {
  const comentarioInput = document.getElementById('inputComentario');
  const comentario = comentarioInput.value;

  if (comentario.trim() !== '') {
    criarCardComentario("Thais", comentario);
    comentarioInput.value = '';
    $('#modalComentario').modal('hide');
  } else {
    alert('Digite um comentário válido antes de salvar.');
  }
});

const botaoLogin = document.querySelector('#button_login');



botaoLogin.addEventListener("click", () => {
  window.location.href = "../pages/Login.html";
});

