const enviaEmail = (pessoaAprovada) => {
    const parte1 = `${pessoaAprovada.email}: parabéns ${pessoaAprovada.nome}`;
    const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
    console.log(mensagem);
};

const listaDeAprovados = [
  { nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51},
  { nome: 'Joao', email: 'joao@example.com', nota: 101},
  { nome: 'Elias', email: 'elias@example.com', nota: 150},
  { nome: 'Marcos', email: 'Marcosple@example.com', nota: 0},
  { nome: 'Felipe', email: 'Felipeple@example.com', nota: 101},
  { nome: 'Carlos', email: 'Carlosple@example.com', nota: 150},
  { nome: 'Flavia', email: 'Flaviaple@example.com', nota: 100},
  { nome: 'Zezinho', email: 'zezinho@example.com', nota: 38},
];

const pessoasAprovadas = listaDeAprovados.filter((pessoa) => pessoa.nota >=100);

pessoasAprovadas.forEach((pessoa) => enviaEmail(pessoa));