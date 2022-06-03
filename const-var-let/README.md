# Const, var e let e a expectativa de vida de variável.

Tentei representar a forma que vejo o ciclo de vida das variáveis como se fossem aves. Sim, isso mesmo! _(Espero que entenda mais a frente)_

Utilizando este conceito "tempo de duração", o javascript tem algumas formas de declaração de variáveis que controla a expectativa de vida de uma "posição na memória".

Porque é interessante discutir isso?
O Javascript esta evoluindo em muitas coisas áreas, facilitando cada vez mais o seu entendimento e uso. Acredito que uma hora ou outra, alguém vai criar o termo "programação semântica" (Se já não tiverem criado), pois isso já esta acontecendo com o html.

No HTML, algumas novas tags surgiram para representar de fato onde estão as coisas no teu site. E para quê? Para os buscadores irem direto ao que é considerado conteúdo, navegação, cabeçalho, rodapé, etc.

E o que tem a ver "programação semântica?" Me explique como se fosse HTML, depois me explica com a forma de declaração de váriaveis em javascript!

## let CODORNA - expectativa de vida baixa.

Declarando variáveis com "expectativa de vida **let** (codorna)".

Veja o exemplo de código abaixo, onde utilizo uma condição **if** pra criar se uma variável do tipo **let** e logo após, tento acessá-la fora desse blogo.

```js
if ("a" == "a") {
  let igual = true;
}
console.log(igual);
```

O resultado deste código acima é um erro.
Tô falando sério, se copiar e colar isso no navegador vai dar erro. Rsrsrs

E se no código acima declarassemos a variável como do tipo **var**, qual seria a diferença? Qual seria a diferença?

```js
if ("a" == "a") {
  var igual = true;
}
console.log(igual);
```

Olha ai a diferença, a mesma peça de código, mas ao invés de utilizar a palavra **let**, foi utilizado **var**. A variável **igual** agora esta disponível fora do bloco de código.

## Por quê desse erro?

Vejamos.. (emoji pensando)

Lembra de alguma palavra reservada do javascript, no qual você tem que processar algo entre **{** e **}** (chaves).

Pois é, isso é um uma "representação explicíta" de um bloco de código. São como pequenas áreas reservadas para que você faça algum tipo de processamento, mas que tem que ficar somente dentro daquela área.

Outros exemplos são as palavras reservadas _switch, while, do...while e for_ e criação de objetos (este último com algumas resalvas).

```js
for (let i = 10; i > 0; i--) {}
```

No loop acima, a área onde eu deveria informar algo que era para fazer dez vezes a mesma coisa - Nada, rsrsrs.

Não tem nada pra fazer. Sério, nada mesmo. E é dessa maneira que iremos ver o famoso **escopo** em ação!

Agora que o loop já fez a "arduosa tarefa de não fazer nada 10 vezes", vamos ver se conseguimos acessar a variável **i** fora do loop **for**

```js
for (let i = 10; i > 0; i--) {} // fim do for
console.log(i);
// output: ReferenceError: i is not defined...
```

E o erro acontece!

### Qual o motivo?

Bem, antes de explicar, troque a palavra reservada **let** para **var** e execute novamente o mesmo código.

```js
for (var i = 0; i < 10; i++) {} // fim do for
console.log(i);
// output: 10
```

Opa, alguma coisa passou para fora do contexto do qual não era para sair!

### Como isso aconteceu?

Bem, variáveis declaradas como **let** tem uma expectiva de vida limitada á área do bloco de código delimitada pelas **{}**.

Fazendo uma analógia com aves, variáveis declaradas com a palavra reservada **var**, tem uma "expectativa de vida" maior do que variáveis declaradas com **let**.

E as constantes (**const**), como fica no meio disso tudo?

### Constantes **const**

As constantes são as "aves maiores", mas com uma resalva: não é possível alterar seu conteúdo.

Por exemplo:

```js
const nome = "Uélio Nobre";
const hobbies = ["comer", "rezar", "amar"];

console.log(nome);
console.log(hobbies);

// output; Uélio Nobre
// output: ["comer", "rezar", "amar"];
```

Mesmo as duas variáveis declaras como constantes, uma delas é possivel alterar o seu conteúdo, outras não.

A tentativa de alterar a variável nome vai gerar um erro.
Se em algum momento, tentassemos alterar o conteúdo da variável **nome** resultaria em um erro.

```js
nome = 1 + 1;
// TypeError: Assignment to constant variable.
```

O erro foi causado por que a contante nome começou como _String_ e com um valor já definido.

Agora vamos alterar o conteúdo da **_const_** `_hobbies_`.

```js
hobbies.push(1 + 1);
console.log(hobbies);
// output: ['comer', 'rezar', 'amar', 2]
```

Opa, conseguimos mudar o valor da contante **hobbies**! Conseguimos!

Errado jovem! A constante ainda continua sendo do tipo array. O que foi feito, foi apenas acrescentar (depositar) mais conteúdo para dentro da ~sacola~.

Quando tentamos alterar o valor de uma variável declarada como **const**, é como se o interpretador do javascript fizesse uma chegagem do tipo, "===" e ao mesmo tempo fosse verficado a "data de nascimento". Ou seja, "um pedaço rígido de código" que se você cria e depois não poderá mais alterar, se não dá erro. rsrsrs

É possível criar uma mesma constante, mas em loops!

Será?

```js
const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

meusNumeros.forEach((l, index) => {
  const quemEuSou = "Inicialização da constante.";

  // Em algum momento isso vai acontecer.
  let resto = index % 2;
  if (resto == 0) {
    // assinatura já usada
    const quemEuSou = `Loop ${index + 1}}Oi sou uma constante feita com String`;
    console.log("zero");
  } else {
    // assinatura já usada
    const quemEuSou = "Oi sou uma constante feita com Numero";
  }
  // console.log(quemEuSou, index);
});
```

E a saída:

```js
// Output: VALOR: Olá sou uma contante 'pequena'...
// Output: VALOR: Sou a CONSTANTE...

// Output: VALOR: { quemSou: 'objeto' }
// Output: VALOR: Sou a CONSTANTE...
// Output: meusNumeros - VALOR: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: ReferenceError: quemEuSou is not defined
```

Incrível, não é isso!?

Incrível mesmo é uma **const** declarada estar se comportando como uma variável do tipo **let**. Como pode ela?!

> Como que esse Avestruz se transformou em uma Codorna? Rsrsrs

Outro exemplo:

```js
const meusNumeros = [1, 2, 3];
const quemEuSou = "Sou a CONSTANTE...";

meusNumeros.forEach((l, index) => {
  // assinnatura já usada, recriando...
  const quemEuSou = { quemSou: "objeto" };
  console.log(
    "CONSTANTE em bloco de código - VALOR:",
    quemEuSou,
    typeof quemEuSou
  );
});

console.log("CONSTANTE GLOBAL - VALOR:", quemEuSou, typeof quemEuSou);

// CONSTANTE em bloco de código - VALOR: { quemSou: 'objeto' } object
// CONSTANTE em bloco de código - VALOR: { quemSou: 'objeto' } object
// CONSTANTE em bloco de código - VALOR: { quemSou: 'objeto' } object
// CONSTANTE GLOBAL - VALOR: Sou a CONSTANTE... string
```

Que resultado interessante, mais uma vez, constantes se comportando como variáveis do tipo **let**.

Como fazer esse código ficar "semântico", no quesito expectativa de vida das variáveis.?
Já que elas se comportam como **let** que tal, deixa-las como let mesma? Afinal, são elas mesmas que estão dizendo sua expectativa.

```js
const meusNumeros = [1, 2, 3];
const quemEuSou = "Sou a CONSTANTE...";

meusNumeros.forEach((l, index) => {
  // mesma assinatura, com tipo diferente
  let quemEuSou = { quemSou: "objeto" };
  console.log("LET - VALOR:", quemEuSou, typeof quemEuSou);
});

console.log("CONSTANTE GLOBAL - VALOR:", quemEuSou, typeof quemEuSou);
```

Agora, tentando acessar variáveis do tipo **let** que estão fora do bloco, mas de cima para baixo.

```js
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

// Output: Sou uma variável LET...
// Output: Sou uma variável LET...
// Output: Sou uma variável LET...
// Output: CONST GLOBAL - VALOR: Sou a CONSTANTE... string
// Output: LET GLOBAL - VALOR: Sou a CONSTANTE... string
// Output: LETTY GLOBAL - VALOR: Sou uma variável LET... function
```

Ou seja, há um padrão de comportamento começando a ficar definido.

Nenhum valor de variáveis do tipo let podem entrar ou sair de blocos de códigos. Somente tem vida dentro de um bloco de código ou somente fora de blocos de códigos. Não em ambos.

`var`

Var criadas dentro de estruturas condicionais, "vazam" o valor para fora do bloco.

Com let isso não acontece. Dependendo de onde ela for declarada, o valor dela não pode entrar ou sair dentro de um bloco de código específico.

Não acho necessário falar sobre o escopo de variáveis dentro de blocos de códigos do tipo _function_ ou _object_, pois já esta implicito este conceito.

Esses exemplos foram feitos seguindo o fluxo de excecução _top-down_, procedural. Utilizar outro paradigma de programação como POO, vai ajudar a tornar esses conceitos mais claros.

E isso é tudo. ;)
