const BuilderPessoas = require("./src/builder");

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
pessoasTypes.forEach((typeRequest) => {
  let pessoa = new BuilderPessoas(typeRequest).create();

  if (pessoa !== undefined) {
    let responseType = typeof pessoa;
    let responseProto = pessoa.__proto__;
    let result = { pessoa, typeRequest, responseType, responseProto };

    pessoa.foo = typeRequest;
    pessoasResults.push(result);
  } else {
    console.log(
      "Não foi possível criar o objeto: '%s'",
      typeRequest.toUpperCase()
    );
  }
});

console.table(pessoasResults);
console.log("\n\n");
