// Class.
class PessoaClass {
  foo = "bar";
}

// Object.
const PessoaObject = {
  foo: "bar",
};

// Function
const PessoaFunction = function () {
  const foo = "bar";
};

// Arrow function
const PessoaFunctionArrow = () => {
  const foo = "bar";
};

// Function Named
function PessoaFunctionNamed() {
  const foo = "bar";
}

// Object Assign
const PessoaObjectAssign = Object.assign({});

// Object Create
const PessoaObjectCreate = Object.create({});

module.exports = {
  PessoaClass,
  PessoaObject,
  PessoaFunction,
  PessoaFunctionArrow,
  PessoaFunctionNamed,
  PessoaObjectAssign,
  PessoaObjectCreate,
};
