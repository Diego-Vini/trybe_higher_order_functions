const numerosSorteados = (aposta, verificaAposta) => {
    const numerosSorteados = [];
    for(let index = 0; index < 6; index += 1) {
    const geradorNumeros = Math.round(Math.random() * (1 - 5) + 5)
    numerosSorteados.push(geradorNumeros)  
    }
    console.log(numerosSorteados)
    const resultado = verificaAposta(aposta, numerosSorteados)
    return resultado
}

const numerosApostados = [3,2,2,4,5,2,3];

const verificaAposta = (aposta, numerosSorteados) => {
  let confereAposta = 0
  for(let index = 0; index < aposta.length; index += 1) {
    if (aposta[index] === numerosSorteados[index]) {
      confereAposta += 1
    }
  }
  if(confereAposta === 6){
    console.log('Parabéns você ganhou')
  } else {
    console.log('Tente novamente')
  }
}

numerosSorteados(numerosApostados, verificaAposta);