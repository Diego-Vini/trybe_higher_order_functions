const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificaNumeros = (numeros) => numeros % 2 == 0;

const numerosDivisiveisPorDois = numbers.filter(verificaNumeros);

console.log(numerosDivisiveisPorDois);

const outraForma = numbers.filter((numeros) => numeros % 2 === 0);

console.log(outraForma)