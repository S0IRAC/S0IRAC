let campoIdade;
let campoFantasia;
let campoComedia;

function setup() {
  createCanvas(660, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoComédia = createCheckbox("Gosta de Comédia?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeComédia = campoComédia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeComédia);

  fill(color(76, 0, 95));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeComédia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Vingadores Ultimato";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeComédia) {
          return "Divertida mente";
        } else {
          return "Gente Grande";
        }
      } else {
        if (gostaDeFantasia) {
          return "Vingadores Ultimato";
        } else {
          return "As aventuras de pi";
        }
      }
    }
  } else {
    if (gostaDeComédia) {
      return "Homem aranha no aranha verso";
    } else {
      return "O feitiço do tempo";
    }
  }
}
// 99,9% fé, 0,1% probabilidade, o importante é que o codigo ta "funcionando"🙂‍👍
