const comentar = document.querySelector('#comment_button');
const secaoComentarios = document.querySelector('#secaoComentarios');

const iconeEditar = '../img/edit_FILL0_wght400_GRAD0_opsz48.svg';
const iconeExcluir = '../img/delete_FILL0_wght400_GRAD0_opsz48.svg';
const iconeCurtir = '../img/favorite_FILL0_wght400_GRAD0_opsz48.svg';
const iconeCurtido = '../img/coracao_preenchido.png';

function botao_comentarios(icone, palavra_botao, cor_botao){
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

  // icone_botao.appendChild(span);
  botao.appendChild(icone_botao);
  botao.appendChild(span);
  // document.body.appendChild(botao);

  return botao;
}
 
function criarCardComentario(nomeUsuario, comentario){
  // let secaoComentarios = document.createElement('div');
  // secaoComentarios.classList.add("container");

  let card = document.createElement('div');
  card.classList.add("card");
  // card.classList.add("container");

  let card_body = document.createElement('div');
  card_body.classList.add("card-body");

  let nome = document.createElement('h5');
  nome.classList.add("card-title");
  nome.innerHTML = nomeUsuario + " comentou: ";

  let comentario_usuario = document.createElement('p');
  comentario_usuario.classList.add("card-text");
  comentario_usuario.innerHTML = comentario;

  let botoes = document.createElement('div');
  botoes.classList.add("botoes");

  let curtida = document.createElement('span');
  curtida.classList.add("botao_comentario");
  curtida.id = 'curtidas';

  let iconeCurtida = document.createElement('img');
  iconeCurtida.classList.add("icones");
  iconeCurtida.src = iconeCurtir;

  curtida.appendChild(iconeCurtida);

  botoes.appendChild(botao_comentarios(iconeEditar, 'Editar', '8850FF'));
  botoes.appendChild(botao_comentarios(iconeExcluir, 'Excluir', 'D62C2C'));
  botoes.appendChild(curtida);

  

  card_body.appendChild(nome);
  card_body.appendChild(comentario_usuario);
  card_body.appendChild(botoes);

  card.appendChild(card_body);

  secaoComentarios.appendChild(card);

  document.body.appendChild(secaoComentarios);
  // document.body.appendChild(card);

  return card;
}

function contadorCurtidas() {
  let contador = 0;

  return {
    incrementar: function() {
      contador++;
      console.log('Curtidas: ' + contador);
    },
    obterTotal: function() {
      return contador;
    }
  };
}

comentar.addEventListener("click", ()=>{
  criarCardComentario("Thais", "eu nao tenho petfrppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");  
})
