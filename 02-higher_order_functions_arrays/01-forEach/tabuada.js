const indiceTabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imprimeTabuada = (indice) => {
  for(let index = 0; index < indiceTabuada.length; index += 1) {
    const resultado = indice * indiceTabuada[index]
    console.log(`${indice} x ${indiceTabuada[index]}= ${resultado}`)
  }
  
}

indiceTabuada.forEach((item) => {
  imprimeTabuada(item)
})