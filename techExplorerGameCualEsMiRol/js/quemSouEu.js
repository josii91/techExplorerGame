const listPersonagens = [
  (personagem0001 = {
      nome: "DESARROLLADORA FRONT-END",
      imagem: "./img/imgPergunta_0001.jpg",
      imagemFinal: "./img/img_0001.jpg",
    }),
    (personagem0001 = {
      nome: "QUALITY ASSURANCE",
      imagem: "./img/imgPergunta_0002.jpg",
      imagemFinal: "./img/img_0002.jpg",
    }),
    (personagem0001 = {
      nome: "ESPECIALISTA EN CIBERSEGURIDAD",
      imagem: "./img/imgPergunta_0003.jpg",
      imagemFinal: "./img/img_0003.jpg",
    }),
    (personagem0001 = {
      nome: "DESARROLLADORA DE VIDEOJUEGOS",
      imagem: "./img/imgPergunta_0004.jpg",
      imagemFinal: "./img/img_0004.jpg",
    }),
    (personagem0001 = {
      nome: "SCRUM MASTER",
      imagem: "./img/imgPergunta_0005.jpg",
      imagemFinal: "./img/img_0005.jpg",
    }),
    (personagem0001 = {
      nome: "PRODUCT OWNER",
      imagem: "./img/imgPergunta_0006.jpg",
      imagemFinal: "./img/img_0006.jpg",
    }),

];

let nomePersonagem;
let imagemPersonagem;
let imagemFinalPersonagem;
let tentativas = 5;
console.log("tentativas =" + tentativas);
let resposta;
let erros = 0;
let acertos = 0;
let finalizouPartida = false;

SorteiaImagem();
function SorteiaImagem() {
  const index = parseInt(Math.random() * listPersonagens.length);

  nomePersonagem = listPersonagens[index].nome;
  imagemPersonagem = listPersonagens[index].imagem;
  imagemFinalPersonagem = listPersonagens[index].imagemFinal;

  console.log(nomePersonagem);
  console.log(imagemPersonagem);

  document.getElementById("imagem").style.backgroundImage =
    "url(" + imagemPersonagem + ")";

  //fesfocar a imagem
  desfocarImagem(tentativas);
}

function desfocarImagem(valoDesfoque) {
  const imagem = document.getElementById("imagem");

  if (valoDesfoque === 0) {
    imagem.style.backgroundImage = `url(${imagemFinalPersonagem})`; 
}


  switch (valoDesfoque) {
    case 5:
      imagem.style.filter = "blur(0)";
      break;
    case 4:
      imagem.style.filter = "blur(0)";
      break;
    case 3:
      imagem.style.filter = "blur(0)";
      break;
    case 2:
      imagem.style.filter = "blur(0)";
      break;
    case 1:
      imagem.style.filter = "blur(0)";
      break;
    case 0:
      imagem.style.filter = "blur(0)";
      break;
    default:
      break;
  }
}

document.addEventListener("keydown", (e) => {
  if (finalizouPartida == false) {
    if (e.key === "Enter") {
      e.preventDefault();
      resposta = document.querySelector("#resposta").value.toUpperCase();
      if (resposta.length < 3 || !resposta.trim() || resposta == undefined) {
        personalizaModal("nomeInvalido");
        document.getElementById("resposta").value = "";
      } else {
        if (tentativas > 0) {
          if (resposta == nomePersonagem) {// se entrar aqui é porque ganhou
            acertos++;
            desfocarImagem(0);
            document.querySelector(".borda-imagem").style.border = "none";
            mudaStatusInput(true);
            finalizouPartida = true;
            personalizaModal("vitoria");
            habilitaBotaoJogarNovamente();
          } 
          else { // se entrar aqui é porque ainda esta tentando acertar
            tentativas--;
            desfocarImagem(tentativas);
            barraDeProgresso(tentativas)
            document.getElementById("resposta").value = "";
            console.log("tentativas =" + tentativas);
          }
        }
  
        if (tentativas == 0) { // se entrar aqui é porque perdeu
          erros++;
          document.querySelector(".borda-imagem").style.border = "none";
          document.getElementById("resposta").value = nomePersonagem;
          mudaStatusInput(true);
          finalizouPartida = true;
          personalizaModal("derrota");
          habilitaBotaoJogarNovamente();
        }
      }
      console.log("tentativas =" + tentativas);
      document.querySelector("#derrotas").innerText = erros;
      document.querySelector("#vitorias").innerText = acertos;
    }
  }
  else{
    return;
  }
});

const modal = document.getElementById("modal-alerta");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function personalizaModal(alerta) {
  const modalMensagem = document.getElementById("modal-mensagem");

  switch (alerta) {
    case "nomeInvalido":
      modalMensagem.innerHTML = "<p> ¿Estás tratando de engañarme? ? </p><p>Ingrese un nombre válido.</p>";
      break;
    case "vitoria":
      modalMensagem.innerHTML = "<p> Eres buena en eso, ¡eh!</p><p>Nunca dudé de ti.</p>";
      break;
    case "derrota":
      modalMensagem.innerHTML = "<p> No fue esta vez</p><p>Apuesto a que podrás hacerlo la próxima vez.</p>";
      break;
    default:
      break;
  }
  modal.style.display = "block";
}

function barraDeProgresso(carregaBarra) {
  if (carregaBarra == 5) {
    document.getElementById("progresso-01").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-02").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-03").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-04").style.backgroundColor = "#ffffff";
    document.getElementById("progresso-05").style.backgroundColor = "#ffffff";
  } else {
    switch (carregaBarra) {
      case 4:
        document.getElementById("progresso-01").style.backgroundColor = "#ffd700";
        break;
      case 3:
        document.getElementById("progresso-02").style.backgroundColor = "#ffd700";
        break;
      case 2:
        document.getElementById("progresso-03").style.backgroundColor = "#ffd700";
        break;
      case 1:
        document.getElementById("progresso-04").style.backgroundColor = "#ffd700";
        break;
      case 0:
        document.getElementById("progresso-05").style.backgroundColor = "#ffd700";
        break;
      default:
        break;
    }
  }
}

function habilitaBotaoJogarNovamente(){
  document.getElementById("btnJogarNovamente").style.display = "inline";
}

document.querySelector("#btnJogarNovamente").addEventListener("click", function(){
  finalizouPartida = false;
  tentativas = 5;
  SorteiaImagem();
  desfocarImagem(tentativas);
  mudaStatusInput(false);
  document.getElementById("resposta").value = "";
  document.getElementById("resposta").focus();
  barraDeProgresso(5)
  document.querySelector("#btnJogarNovamente").style.display = "none";
  document.querySelector(".borda-imagem").style.border = "10px solid #ffd700"
});

function mudaStatusInput(condicao){
  document.getElementById("resposta").disabled = condicao;
}