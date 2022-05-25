## Curiosidades e sobre a linguagem.

### Criacao de objetos

No Javascript há algumas maneiras de criar objetos. Mas algumas delas não herda a propriedade **\_\_proto\_\_**;

Há vários modos de criar objetos em javascript. Pode usar funções objetos e métodos que criam objetos.

Abaixo esta algumas formas de criar alguns objetos escritos de formas diferentes.

Alguns pode usar a mesma estratégia de criação (_Object.assing_).

Primeiro executo todas as classes, afim de obter as seguintes informações:

- Obtenho o tipo do objeto.
- As propriedades **proto**
- Imprimo o ressultado.

```js
pessoasObjects = [];
pessoasTypes = [
  "Class",
  "Object",
  "Function",
  "FunctionArrow",
  "FunctionNamed",
  "ObjectAssign",
  "ObjectCreate",
  "Wrong Object",
];

pessoasResults = [];
pessoasTypes.forEach((typeClient) => {
  let pessoa = new BuilderPessoas(typeClient).create();

  if (pessoa !== undefined) {
    let responseType = typeof pessoa;
    let responseProto = pessoa.__proto__;
    let result = { pessoa, typeClient, responseType, responseProto };

    pessoa.foo = typeClient;
    pessoasResults.push(result);
  } else {
    console.log(
      "Não foi possível criar o objeto: '%s'",
      typeClient.toUpperCase()
    );
  }
});

console.table(pessoasResults);
console.log("\n\n");
```

Executando partir do Nodejs:

```bash
$ node 2022/05/24/01-como-criar-objeto.js
```

Os resultados foram

```js
### --- Nenhum objeto Encontrado Wrong Object
Não foi possível criar o objeto: 'WRONG OBJECT'
┌─────────┬──────────────────────────────────────────────────────────┬─────────────────┬──────────────┬─────────────────────────────┐
│ (index) │                          pessoa                          │      type       │ responseType │        responseProto        │
├─────────┼──────────────────────────────────────────────────────────┼─────────────────┼──────────────┼─────────────────────────────┤
│    0    │               PessoaClass { foo: 'Class' }               │     'Class'     │   'object'   │             {}              │
│    1    │                    { foo: 'Object' }                     │    'Object'     │   'object'   │ [Object: null prototype] {} │
│    2    │            PessoaFunction { foo: 'Function' }            │   'Function'    │   'object'   │             {}              │
│    3    │                 { foo: 'FunctionArrow' }                 │ 'FunctionArrow' │   'object'   │ [Object: null prototype] {} │
│    4    │ [Function: PessoaFunctionNamed] { foo: 'FunctionNamed' } │ 'FunctionNamed' │  'function'  │             {}              │
│    5    │                 { foo: 'ObjectAssign' }                  │ 'ObjectAssign'  │   'object'   │ [Object: null prototype] {} │
│    6    │                 { foo: 'ObjectCreate' }                  │ 'ObjectCreate'  │   'object'   │             {}              │
└─────────┴──────────────────────────────────────────────────────────┴─────────────────┴──────────────┴─────────────────────────────┘


```
