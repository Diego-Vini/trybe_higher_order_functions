const nomes = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const converteMaiusculo = (nome, indice) => {
  nomes[indice] = nome.toUpperCase();
};

nomes.forEach(converteMaiusculo);

console.log(nomes)