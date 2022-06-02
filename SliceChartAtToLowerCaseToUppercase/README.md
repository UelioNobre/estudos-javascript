# Manipulando Strings

Navegando entre as letras e alterando-as.

Funções Javascript.

- slice() - _Fatia uma porção da string._
- chartAt() - _Caractere em..._
- toUpperCase() - _Para caixa alta._
- toLowerCase() - _Para caixa baixa._

Exemplo:

- Pega a primeira letra, transforma em minúscula.
- Pega a segunda letra, transforma em maiúscula.

```js
var name = "Uélio Nobre";
var firstLetter = name.slice(6, 1).toLowerCase();
var secondLetter = name.charAt(1).toUpperCase();
var remainsLetter = name.slice(2);
var output = firstLetter + secondLetter + remainsLetter;

console.log(output);

// output is uÉlio Nobre
```
