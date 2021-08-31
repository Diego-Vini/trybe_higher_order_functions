const numbers = [19, 21, 30, 3, 45, 22, 15];

const veriFyEven = (number) => number % 2 === 0;

const isEven = numbers.find(veriFyEven);

console.log(isEven)

console.log(veriFyEven(9));
console.log(veriFyEven(14));

//Simplificando o código

const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2);
