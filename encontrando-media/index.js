// A media das idades de A e B é 15 anos.
// A media das idades de A, B e C é 12 anos.
// Quantos anos tem C?

var mediaAeB = 15 * 2;
var mediaAlvo = 12;
var idadeC = 0;
var totalLetras = 3;
var x = 1;

// Executa pelo menos uma vez.
do {
  var media = parseInt((mediaAeB + x) / totalLetras);
  if (media !== mediaAlvo) {
    x++;
  } else {
    idadeC = x;
    console.log("Media encontrada!");
  }
} while (media != mediaAlvo);

var total = mediaAeB + idadeC;

console.log(mediaAeB, "+", idadeC, "=", total);
console.log(total, "/", totalLetras, "=", media);
console.log("C =", idadeC);
