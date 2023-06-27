// const cardComentario = document.querySelector('.card');
const comentar = document.querySelector('#comment_button');
// const 
function botao_comentarios(icone, palavra_botao){
  let botao = document.createElement("button");
  botao.classList.add("btn btn-primary botao_comentario");
  let icone_botao = document.createElement("img");
  icone_botao.src = icone;
  let span = document.createElement("span");
  span.innerHTML = palavra_botao;
  icone_botao.appendChild(span);
  botao.appendChild(icone_botao);
  return botao;
}
function criarCardComentario(nomeUsuario, comentario, qtdCurtidas){

}
comentar.addEventListener("click", ()=>{
  // document.body.appendChild(cardComentario);
  botao_comentarios()
})
