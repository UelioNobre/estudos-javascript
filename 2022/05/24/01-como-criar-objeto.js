// Pessoa objeto.
const PessoaObject = {
  nome: "Uélio",
  instagram: "@uelionobre",
};

// Pessoa class
class PessoaClass {}

// Pessoa funcao
const PessoaFunction = function () {};

// Pessoa arrow function
const PessoaArrowFunction = () => {
  return this;
};

// Pessoa funcao nomeada
function PessoaFunctionNomeada() {}

const p1 = Object.assign({}, PessoaObject);
const p2 = new PessoaClass();
const p3 = new PessoaFunction();
const p4 = new Object({});
const p5 = PessoaArrowFunction();
const p6 = new PessoaFunctionNomeada();
const p7 = Object.create({});

pessoas = [p1, p2, p3, p4, p5, p6, p7];
pessoas.forEach((pessoa) => {
  const tp = typeof pessoa;
  const pp = pessoa.__proto__;

  console.log(tp, pp);
});
