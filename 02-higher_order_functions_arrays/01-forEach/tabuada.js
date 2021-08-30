const indiceTabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imprimeTabuada = (item) => {
  for(let index = 0; index < indiceTabuada.length; index += 1) {
    const resultado = item * indiceTabuada[index]
    console.log(`${item} x ${indiceTabuada[index]}= ${resultado}`)
  }
};

indiceTabuada.forEach((item) => {
  imprimeTabuada(item)
});