## Curiosidades e sobre a linguagem.

### Criacao de objetos

No Javascript há algumas maneiras de criar objetos. Mas algumas delas não herda a propriedade **\_\_proto\_\_**;

Resumo: Construtores de objetos javascript.

````
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

```

```
$ node 2022/05/24/01-como-criar-objeto.js
```
````
