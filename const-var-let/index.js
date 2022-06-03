/**
 * Usando var
 * isTrue esta acessível fora do bloco if.
 * Output: true
 */

// --------------------------------------------------------

/**
 * Usando let
 * LET é um tipo de variável com um tempo de vida bem curto.
 */

// Descomente esse código e veja o erro.
// if (1 == 1) {
//   let isLet = true;
// }
// console.log(isLet);

/**
 * Não é possível acessar o conteúdo de isLet fora do bloco if.
 * Output: error
 */

// --------------------------------------------------------

// if (1 == 1) {
//   var isVariavel = true;
// }
// console.log(isVariavel);

// for (var i = 0; i < 10; i++) {} // fim do for
// console.log(i);

// if ("a" == "a") {
//   var igual = true;
// }
// console.log(igual);

// function doSomething() {
//   var some = true;
// }

// doSomething();
// console.log(some);

// const nome = "Uélio Nobre";
// const hobbies = ["comer", "rezar", "amar"];

// // console.log(nome);
// // console.log(hobbies);
// // nome = "Outro nome";
// // console.log(nome);
// hobbies.push(1 + 1);
// console.log(hobbies);

// criando constantes

// const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(meusNumeros);

// meusNumeros.forEach((l, index) => {
//   const quemEuSou = "Sou a CONSTANTE...";

//   // Em algum momento isso vai acontecer.
//   let resto = index % 2 === 0;

//   if (resto) {
//     // assinatura já usada
//     const quemEuSou = "Olá sou uma contante 'pequena'...";
//     console.log("VALOR:", quemEuSou);
//   } else {
//     // assinatura já usada
//     const quemEuSou = { quemSou: "objeto" };
//     console.log("VALOR:", quemEuSou);
//   }
//   console.log("VALOR:", quemEuSou);
//   console.log();
// });

// console.log("meusNumeros - VALOR:", meusNumeros);
// console.log("Fora do loop - VALOR:", quemEuSou);

// const meusNumeros = [1, 2, 3];
// const quemEuSou = "Sou a CONSTANTE...";

// meusNumeros.forEach((l, index) => {
//   // mesma assinatura, com tipo diferente
//   const quemEuSou = { quemSou: "objeto" };
//   console.log(
//     "CONSTANTE em bloco de código - VALOR:",
//     quemEuSou,
//     typeof quemEuSou
//   );
// });

// console.log("CONSTANTE GLOBAL - VALOR:", quemEuSou, typeof quemEuSou);

// // Como fazer esse código ficar "semântico", no quesito expectativa de vida das variáveis.?
// // Já que elas se comportam como **let** que tal deixa-las como let mesma? Afinal, são elas mesmas que estão dizendo seu tipo.

// const meusNumeros = [1, 2, 3];
// const quemEuSou = "Sou a CONSTANTE...";

// meusNumeros.forEach((l, index) => {
//   // mesma assinatura, com tipo diferente
//   let quemEuSou = { quemSou: "objeto" };
//   console.log("LET - VALOR:", quemEuSou, typeof quemEuSou);
// });

// usando var

const meusNumeros = [1, 2, 3];
const quemEuSou = "Sou a CONSTANTE...";
let variavelLet = "Sou uma variável LET...";

meusNumeros.forEach((l, index) => {
  // Chamando "LET" fora do bloco.
  console.log(variavelLet);
  //
});

const Maryletty = () => {
  return variavelLet;
};

console.log("CONST GLOBAL - VALOR:", quemEuSou, typeof quemEuSou);
console.log("LET GLOBAL - VALOR:", quemEuSou, typeof quemEuSou);
console.log("LETTY GLOBAL - VALOR:", Maryletty(), typeof Maryletty);
