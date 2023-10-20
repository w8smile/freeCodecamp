// const имеет все замечательные функции let, с дополнительным бонусом, заключающимся в том, что переменные, объявленные с использованием, constдоступны только для чтения.
// Они представляют собой постоянное значение, а это означает, что после того, как переменной присвоено значение const, ее нельзя переназначить:
// const FAV_PET = "Cats";
// FAV_PET = "Dogs";
// В консоли отобразится ошибка из-за переназначения значения FAV_PET.

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line