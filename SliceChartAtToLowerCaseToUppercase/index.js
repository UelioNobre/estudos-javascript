/**
 * Torna a primeira letra em minúscula e
 * a segunda para maiúscula.
 */

var name = "Uélio Nobre";
var firstLetter = name.slice(0, 1).toLowerCase();
var secondLetter = name.charAt(1).toUpperCase();
var remainsLetter = name.slice(2);
var output = firstLetter + secondLetter + remainsLetter;

console.log(output);

// name = uÉlio Nobre
