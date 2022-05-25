const {
  PessoaClass,
  PessoaObject,
  PessoaFunction,
  PessoaFunctionArrow,
  PessoaFunctionNamed,
  PessoaObjectAssign,
  PessoaObjectCreate,
} = require("./many-objects.js");

// const {
//   PessoaObject,
//   PessoaClass,
//   PessoaFunction,
//   PessoaFunctionNamed,
//   PessoaFunctionArrow,
//   PessoaObjectCreate,
// } = require("./muitos-objetos.js");

class FabricaPessoas {
  constructor(tipo) {
    this.tipo = tipo;
    return this;
  }

  create = () => {
    // console.log(`A fabrica criou: Pessoa${this.tipo}`);
    let aux = undefined;

    switch (this.tipo) {
      case "Class":
        aux = new PessoaClass();
        break;
      case "ObjectAssign":
        aux = Object.assign({ foo: "bar" });
        break;
      case "Function":
        aux = new PessoaFunction();
        break;
      case "FunctionArrow":
        // Need to use a function expression to create an arrow function.
        aux = Object.assign({}, PessoaFunctionArrow);
        break;
      case "FunctionNamed":
        aux = PessoaFunctionNamed;
        break;
      case "Object":
        aux = PessoaObject;
        break;
      case "ObjectCreate":
        aux = PessoaObjectCreate;
        break;
      default:
        console.log("### --- Nenhum objeto Encontrado", this.tipo);
        return undefined;
    }

    return aux;
  };
}

module.exports = FabricaPessoas;
